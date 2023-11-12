import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import PodcastOverview from "../PodcastOverview/PodcastOverview";

import PodcastCard from "./PodcastCard";
import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/app/page";

describe("PODCAST CARD", () => {
  let mockPodcasts: Podcast[] = [
    {
      id: "1",
      title: "Podcast 1",
      artist: "Artist 1",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
    {
      id: "2",
      title: "Podcast 2",
      artist: "Artist 2",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
    {
      id: "3",
      title: "Podcast 3",
      artist: "Artist 3",
      images: [
        { attributes: { height: "100" }, label: "Imagen 1" },
        { attributes: { height: "200" }, label: "Imagen 2" },
        { attributes: { height: "300" }, label: "Imagen 3" },
      ],
    },
  ];

  test("should render the articles owned by <PodcastCard>", () => {
    const view = render(
      <PodcastOverview>
        <PodcastList podcasts={mockPodcasts} />
      </PodcastOverview>
    );
    const articles = view.container.querySelectorAll("article");

    expect(articles.length).toEqual(mockPodcasts.length);
  });

  test("should render the correct elements of the Podcast passed", () => {
    const view = render(<PodcastCard podcast={mockPodcasts[0]} />);

    const h2Text = view.getByText(mockPodcasts[0].title);
    const pText = view.getByText(/Artist 1/i); // this equals to the artist of the first position of mockPodcast

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(h2Text).toBeInTheDocument();
    expect(pText).toBeInTheDocument();
  });
});
