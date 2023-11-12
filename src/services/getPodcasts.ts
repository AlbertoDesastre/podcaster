import { getCache, saveOnCache } from "./cacheService/cacheService";
import constants from "@/constants.json";
import { podcastsLongTemplate } from "@/assets";
import { ApiResponse, Feed, Podcast } from "@/app/mocks/podcastList";

// this is the fake version that doesn't call the real API. Correct this based on "usePodcast" custom hook
function getPodcasts() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.list);

    saveOnCache({
      storageName: constants.PODCAST_NAMING.list,
      data: podcastsLongTemplate,
      expirationDate: new Date(),
    });
  }

  const { data: cachedPodcasts } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  return { podcastsList: cachedPodcasts as Podcast[] };
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

export { getPodcasts, fetchPodcasts };
