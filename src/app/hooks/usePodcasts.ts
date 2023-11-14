import {
  getCache,
  saveOnCache,
} from "../../services/cacheService/cacheService";
import constants from "@/constants.json";
import { ApiResponse, Feed, Podcast } from "@/app/mocks/podcastList";
import { useState, useEffect } from "react";

function usePodcasts() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const { data, expirated } = getCache({
          storageName: constants.PODCAST_NAMING.list,
        });

        // if there is already data cached, or the one we have is older than 24h, we will fetch it
        if (!data || (data && expirated === true)) {
          localStorage.removeItem(constants.PODCAST_NAMING.list);

          const newPodcasts = await fetchPodcasts();

          setPodcasts(newPodcasts);

          saveOnCache({
            storageName: constants.PODCAST_NAMING.list,
            data: newPodcasts,
            expirationDate: new Date(),
          });
        } else {
          setPodcasts(data as Podcast[]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, []);

  return { podcasts, loading };
}

async function fetchPodcasts() {
  return await fetch(
    constants.URLs.allOrigin + encodeURIComponent(constants.URLs.podcastList)
  )
    .then((res) => {
      return res.json();
    })

    .then((response: ApiResponse) => {
      const podcasts = (JSON.parse(response.contents).feed as Feed).entry;

      return podcasts;
    })
    .catch((err) => {
      console.error("There was an error while getting the podasts list.");
      return [];
    });
}

export { usePodcasts };
