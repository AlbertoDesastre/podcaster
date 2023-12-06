import { getCache, saveOnCache } from "../services/cacheService/cacheService";
import constants from "@/constants.json";
import { ApiResponse } from "@/models/Api";
import { Podcast } from "@/models/Podcast";
import {
  PodcastArtistAndEpisodesResults,
  PodcastEpisode,
  PodcastInfo,
} from "@/models/PodcastEpisode";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

async function fetchEpisodes({
  artistId,
  episodeQuantity,
  setLoading,
}: {
  artistId: string;
  episodeQuantity: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
}): Promise<{
  fetchedPodcast: PodcastInfo | null;
  fetchedEpisodes: PodcastEpisode[] | null;
  error: boolean;
}> {
  return await fetch(
    constants.URLs.allOrigin +
      encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${artistId}&media=podcast&entity=podcastEpisode&limit=${episodeQuantity}`
      )
  )
    .then((res) => {
      return res.json();
    })

    .then((response: ApiResponse) => {
      const artistAndEpisodes = (
        JSON.parse(response.contents) as PodcastArtistAndEpisodesResults
      ).results;

      const fetchedPodcast = artistAndEpisodes[0];
      const fetchedEpisodes = artistAndEpisodes.slice(1) as PodcastEpisode[];

      return { fetchedPodcast, fetchedEpisodes, error: false };
    })
    .catch((err) => {
      console.error("There was an error while getting the podasts episodes.");
      setLoading(false);

      return { fetchedEpisodes: null, fetchedPodcast: null, error: true };

      /* throw Error("There was an error while getting the podasts episodes."); */
    });
}

export function getPodcastSummary({ artistId }: { artistId: string }) {
  // since the list of episodes that's already cached when getting at the main page already contains the summary of the podcast,
  // I take all the podcasts and filter them by the artistId on the URL/Params

  console.log("ARTIST ID COMING FROM PODCAST SUMMARY --> ", artistId);
  const { data } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  const podcasts = data as Podcast[];
  console.log("PODCASTS COMING FROM PODCAST SUMMARY --> ", podcasts);

  const matchingPodcast = podcasts.find((podcast) => {
    return podcast.id.attributes["im:id"] === artistId;
  });

  if (!matchingPodcast) {
    console.error("No summary for this podcast was found.");
    return "";
  }

  return matchingPodcast.summary.label;
}

export function useEpisodes({ artistId }: { artistId: string }) {
  const [podcast, setPodcast] = useState<PodcastInfo>();
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const summary = getPodcastSummary({ artistId });

  // console.log(summary, artistId);
  const episodeCacheName =
    constants.PODCAST_NAMING.episodes + `:artistId_${artistId}`;

  useEffect(() => {
    const { data, expirated } = getCache({
      storageName: episodeCacheName,
    });

    if (!data || (data && expirated === true)) {
      localStorage.removeItem(episodeCacheName);
      try {
        const getPodcastAndEpisodes = async () => {
          const { fetchedPodcast, fetchedEpisodes, error } =
            await fetchEpisodes({ artistId, episodeQuantity: "5", setLoading });

          // it must be cleared WHEN and WHY it's going to throw an error, inside a try catch
          if (error) {
            throw "Error ocurred when fetching episodes";
          }

          setPodcast(fetchedPodcast as PodcastInfo);
          setEpisodes(fetchedEpisodes as PodcastEpisode[]);

          saveOnCache({
            storageName: episodeCacheName,
            data: JSON.stringify({
              podcast: fetchedPodcast,
              episodes: fetchedEpisodes,
            }),
            expirationDate: new Date(),
          });
        };

        getPodcastAndEpisodes();
      } catch (error) {
        console.error(error);
      }
    } else {
      const {
        podcast,
        episodes,
      }: { podcast: PodcastInfo; episodes: PodcastEpisode[] } = JSON.parse(
        data as string
      );

      setPodcast(podcast);
      setEpisodes(episodes);
      setLoading(false);
    }
  }, [artistId, episodeCacheName]);

  return { episodes, podcast, summary, loading };
}
