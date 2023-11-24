import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";

import PodcastEpisodeList from "./PodcastEpisodeList";
import { mockPodcastEpisode, mockPodcastInfo } from "@/assets";

describe("PODCAST EPISODE LIST", () => {
  const episodes = mockPodcastEpisode;
  const podcastId = mockPodcastInfo.artistId.toString();

  test("should render the amount of links equal to the amount of episodes", () => {
    render(
      <PodcastEpisodeList episodes={episodes} params={{ id: podcastId }} />
    ); // this would emulate the component receiven the ID of the Podcast itself, to then be able to navigate

    // if episodes are defined, each episode has an anchor that redirects consumer to "podcast/{podcastId/episodes/{episodeId}"
    const anchors = screen.queryAllByRole("link");
    expect(anchors.length).toEqual(episodes.length);
  });

  test("should render the content provided by props", () => {
    render(
      <PodcastEpisodeList episodes={episodes} params={{ id: podcastId }} />
    );

    // Title of the podcast episode
    expect(
      screen.queryByText(/Episode 675 | "The Wind Blew"/i)
    ).toBeInTheDocument(); // this appears on the mockPodcastEpisode, position 0
    expect(
      screen.queryByText(/Episode 674 | "Refer to The Tag"/i)
    ).toBeInTheDocument(); // this appears on the mockPodcastEpisode, position 1

    // Link that redirects to the episode itself

    const linkEpisode = screen.getAllByRole("link")[0];
    const episodeId = mockPodcastEpisode[0].episodeGuid;
    expect(linkEpisode).toBeInTheDocument();
    expect(linkEpisode).toHaveAttribute(
      "href",
      `/podcast/${podcastId}/episode/${episodeId}`
    );
  });
});
