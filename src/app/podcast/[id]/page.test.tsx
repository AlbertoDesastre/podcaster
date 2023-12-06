import React from "react";
import { render, screen } from "@testing-library/react";
import { mockPodcastInfo, mockPodcastEpisode, mockPodcasts } from "@/assets";
import PodcastDetail from "./page";
import * as useEpisodesModule from "@/hooks/useEpisodes";

// SMALL GUIDE TO MOCKING FUNCTIONS

// first, I have to mock the MODULE I want to mock with jest.mock, passing only and exclusive the relative route
jest.mock("../../../hooks/useEpisodes");

describe("PODCAST DETAIL", () => {
  // then, to have them prepared, I can already create jest functions to mock their values later in the code.
  const mockGetPodcastSummary = jest.fn();
  const mockUseEpisodes = jest.fn();

  // then
  beforeEach(() => {
    jest.clearAllMocks();
    // When I want to spy any calls related to one method of my module, I don't have to save this ".spyOn" in a variable.
    // this is because I'm mocking the implementation right after, with a jest.fn that's already saved on a variable.
    // With that variable from before I can do any calls related to spies.
    jest
      .spyOn(useEpisodesModule, "getPodcastSummary")
      .mockImplementation(mockGetPodcastSummary);
    jest
      .spyOn(useEpisodesModule, "useEpisodes")
      .mockImplementation(mockUseEpisodes);
  });

  // const podcasts = mockPodcasts;
  const params = { id: mockPodcasts[0].id.attributes["im:id"] };

  test("should render link based on the podcastId", () => {
    mockUseEpisodes.mockReturnValue({
      episodes: mockPodcastEpisode,
      podcast: mockPodcastInfo,
      summary: "This is a summary",
      loading: false,
    });

    render(<PodcastDetail params={params} />);

    const linkToPodcast = screen.queryAllByRole("link")[0];

    // console.log(mockUseEpisodes.mock.calls.length);  <--- this is a way to find out how many times the hook got called
    // expect(mockUseEpisodes).toHaveBeenCalledTimes(1); <--- this is another one

    expect(linkToPodcast).toBeInTheDocument();
  });
});
