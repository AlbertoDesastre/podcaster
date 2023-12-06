import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";

import {
  mockPodcastInfo,
  mockPodcastEpisode,
  mockEpisodeSummary,
} from "@/assets";

import PodcastFigure from "./PodcastFigure";

describe("PODCAST FIGURE", () => {
  const podcast = mockPodcastInfo;
  // const episodes = mockPodcastEpisode;
  const summary = mockEpisodeSummary;
  const params = { id: mockPodcastInfo.artistId.toString() };

  test("should render data passed by props and nothing else", () => {
    render(
      <PodcastFigure
        title={podcast.trackName}
        artist={podcast.artistName}
        summary={summary}
        params={params}
      />
    );

    // the main attributes of PodcastFigure
    expect(screen.getByText(podcast.trackName)).toBeInTheDocument();
    expect(screen.getByText("by " + podcast.artistName)).toBeInTheDocument();
    expect(screen.getByText(summary)).toBeInTheDocument();
  });

  test("should render link based on the podcastId", () => {
    render(
      <PodcastFigure
        title={podcast.trackName}
        artist={podcast.artistName}
        summary={summary}
        params={params}
      />
    );

    const linkToPodcast = screen.queryAllByRole("link")[0];

    // the main attributes of PodcastFigure
    expect(linkToPodcast).toBeInTheDocument();
    expect(linkToPodcast).toHaveAttribute("href", `/podcast/${params.id}`);
  });
});
