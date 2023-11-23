import React from "react";
import { render, waitFor } from "@testing-library/react";
import PodcastDetail from "./page";
import { mockPodcastInfo, mockPodcastEpisode } from "@/assets";

describe("PODCAST DETAIL - (page --> podcast[id)", () => {
  test("should render the selected podcast details and not render the rest", async () => {
    const params = { id: mockPodcastInfo.artistId.toString() };
    const view = render(<PodcastDetail params={params} />);

    await waitFor(
      () => {
        // the episode given by params:
        expect(view.getByText(mockPodcastInfo.trackName)).toBeInTheDocument();
        expect(
          view.getByText("by " + mockPodcastInfo.artistName)
        ).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
  /*   test("should handle a podcast episode not found", () => {
    const params = { id: "90790" };
    const view = render(<PodcastDetail params={params} />);

    expect(view.getByText(/Podcast Not Found/i)).toBeInTheDocument();
  }); */
});
