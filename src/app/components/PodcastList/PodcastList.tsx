import { ChangeEvent } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./PodcastList.scss";

import useFilterPodcasts from "./useFilterPodcast";
import { Podcast } from "@/mocks/mockPodcast";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const { filterByNameAndTitle, matchingPodcasts, podcastCount } =
    useFilterPodcasts({ podcasts });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    // console.log(event.target.value);

    filterByNameAndTitle({ search });
  };

  return (
    <>
      <header className="filter-header">
        <span>{podcastCount}</span>
        <input
          data-testid="filter-input"
          type="text"
          onChange={handleInputChange}
          placeholder="Filter podcasts..."
        ></input>
      </header>

      <ul className="podcast-list">
        {matchingPodcasts.map((podcast) => {
          return <PodcastCard key={podcast.id.label} podcast={podcast} />;
        })}
      </ul>
    </>
  );
}

export default PodcastList;
