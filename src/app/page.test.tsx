import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";
import Home from "./page";
import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";

let mockUsePodcastResponse = {
  podcasts: [],
  loading: false,
};

describe("HOME", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("should render loading if the data still fetching", () => {
    const view = render(
      <Dashboard loading={true}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(view.container.querySelector("span")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    const view = render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );
    const span = view.container.querySelectorAll("span");
    expect(span.length).toEqual(1); // only one span should render, and that's the counter from PodcastOverview
  });
});
