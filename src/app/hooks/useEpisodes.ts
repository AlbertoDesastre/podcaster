import {
  getCache,
  saveOnCache,
} from "../../services/cacheService/cacheService";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";
import { ApiResponse } from "../mocks/podcastList";
import { PodcastDetail, PodcastDetailResults } from "../mocks/podcastDetail";
import { useEffect, useState } from "react";

export type PodcastEpisode = {
  id: string;
  episodeTitle: string;
  date: string;
  duration: string; // for example --> "14:00"
};

type PodcastFullDetail = {
  id: string;
  title: string;
  artist: string;
  description: string;
  // image
  episodes: PodcastEpisode[];
};

export function useEpisodes({ artistId }: { artistId: string }) {
  const [episodes, setEpisodes] = useState<PodcastDetail[]>([]);

  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.episodes,
  });

  useEffect(() => {}, [artistId]);

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.episodes);

    saveOnCache({
      storageName: constants.PODCAST_NAMING.episodes,
      data: podcastEpisodes,
      expirationDate: new Date(),
    });
  }

  const { data: cachedPodcastEpisodes } = getCache({
    storageName: constants.PODCAST_NAMING.episodes,
  });

  return { episodes: cachedPodcastEpisodes as PodcastFullDetail[] };
}

async function fetchEpisodes({
  artistId,
  episodeQuantity,
}: {
  artistId: string;
  episodeQuantity: string;
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
      const episodes = (JSON.parse(response.contents) as PodcastDetailResults)
        .results;

      return episodes;
    })
    .catch((err) => {
      console.error("There was an error while getting the podasts episodes.");
      return [];
    });
}
