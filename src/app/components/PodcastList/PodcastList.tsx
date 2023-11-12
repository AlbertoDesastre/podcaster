import { useState, ChangeEvent } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./PodcastList.scss";
import Link from "next/link";
import constants from "@/constants.json";
import { Podcast } from "@/services/getPodcasts";

function filterByTitleAndName({
  textToFind,
  podcastArray,
}: {
  textToFind: string;
  podcastArray: Podcast[];
}) {
  const filteredPodcasts = podcastArray.filter((podcast) => {
    const title = podcast.title.toLowerCase();
    const artist = podcast.artist.toLowerCase();
    const matchingText = textToFind.toLowerCase();

    return title.includes(matchingText) || artist.includes(matchingText);
  });

  return filteredPodcasts;
}

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const [filter, setFilter] = useState("");
  const [matchingPodcasts, setMatchingPodcasts] = useState(podcasts);
  const [countMatchingPodcasts, setCountMatchingPodcasts] = useState(
    podcasts.length
  );
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    console.log(event.target.value);

    if (event.target.value === "") {
      setMatchingPodcasts(podcasts);
      setCountMatchingPodcasts(podcasts.length);
    } else {
      const resultOfFilter = filterByTitleAndName({
        textToFind: filter,
        podcastArray: podcasts,
      });
      setMatchingPodcasts(resultOfFilter);
      setCountMatchingPodcasts(resultOfFilter.length);
    }
  };

  return (
    <>
      <header className="filter-header">
        <span>{countMatchingPodcasts}</span>
        <input
          data-test-id="filter-input"
          type="text"
          onChange={handleInputChange}
          placeholder="Filter podcasts..."
        ></input>
      </header>

      <ul className="podcast-list">
        {matchingPodcasts.map((podcast) => {
          return <PodcastCard key={podcast.id} podcast={podcast} />;
        })}
      </ul>
    </>
  );
}

export default PodcastList;
