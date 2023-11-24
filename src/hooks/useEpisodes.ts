import { getCache, saveOnCache } from "../services/cacheService/cacheService";
import constants from "@/constants.json";
import { ApiResponse } from "@/models/Api";
import {
  PodcastArtistAndEpisodesResults,
  PodcastEpisode,
  PodcastInfo,
} from "@/models/PodcastEpisode";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useEpisodes({ artistId }: { artistId: string }) {
  const [podcast, setPodcast] = useState<PodcastInfo>();
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);

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
          const { fetchedPodcast, fetchedEpisodes } = await fetchEpisodes({
            artistId,
            episodeQuantity: "5",
            setLoading,
          });

          setPodcast(fetchedPodcast);
          setEpisodes(fetchedEpisodes);
          setLoading(false);

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
        console.error("This error happened on /podcast --> " + error);
      } finally {
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

  return { episodes, podcast, loading };
}

async function fetchEpisodes({
  artistId,
  episodeQuantity,
  setLoading,
}: {
  artistId: string;
  episodeQuantity: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
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

      return { fetchedPodcast, fetchedEpisodes };
    })
    .catch((err) => {
      console.error("There was an error while getting the podasts episodes.");
      setLoading(false);
      throw Error("There was an error while getting the podasts episodes.");
    });
}
