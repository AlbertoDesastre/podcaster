import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import PodcastCard from "./PodcastCard";
import { Podcast } from "@/mocks/mockPodcast";

describe("PODCAST CARD", () => {
  let mockPodcasts: Podcast[] = [
    {
      "im:name": { label: "The Tech Talk Show" },
      "im:image": [
        {
          label: "https://example.com/image1.png",
          attributes: { height: "55" },
        },
        {
          label: "https://example.com/image2.png",
          attributes: { height: "60" },
        },
        {
          label: "https://example.com/image3.png",
          attributes: { height: "170" },
        },
      ],
      summary: { label: "Exploring the latest in technology and innovation." },
      "im:price": {
        label: "Free",
        attributes: { amount: "0", currency: "USD" },
      },
      "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
      rights: { label: "© 2023 Tech Talk Show" },
      title: { label: "The Tech Talk Show - Tech Insights and More" },
      link: {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://example.com/techtalk",
        },
      },
      id: {
        label: "https://example.com/techtalk",
        attributes: { "im:id": "123456789" },
      },
      "im:artist": {
        label: "Tech Talk Network",
        attributes: { href: "https://example.com/techtalknetwork" },
      },
      category: {
        attributes: {
          "im:id": "1310",
          term: "Technology",
          scheme: "https://example.com/techscheme",
          label: "Technology",
        },
      },
      "im:releaseDate": {
        label: "2023-11-15T12:00:00-07:00",
        attributes: { label: "November 15, 2023" },
      },
    },
    {
      "im:name": { label: "The Science Hour" },
      "im:image": [
        {
          label: "https://example.com/science1.png",
          attributes: { height: "55" },
        },
        {
          label: "https://example.com/science2.png",
          attributes: { height: "60" },
        },
        {
          label: "https://example.com/science3.png",
          attributes: { height: "170" },
        },
      ],
      summary: {
        label:
          "Dive deep into the world of scientific discoveries and advancements.",
      },
      "im:price": {
        label: "Free",
        attributes: { amount: "0", currency: "USD" },
      },
      "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
      rights: { label: "© 2023 Science Hour" },
      title: { label: "The Science Hour - Exploring Scientific Wonders" },
      link: {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://example.com/sciencehour",
        },
      },
      id: {
        label: "https://example.com/sciencehour",
        attributes: { "im:id": "987654321" },
      },
      "im:artist": {
        label: "Science Hour Network",
        attributes: { href: "https://example.com/sciencehournetwork" },
      },
      category: {
        attributes: {
          "im:id": "1315",
          term: "Science",
          scheme: "https://example.com/sciencescheme",
          label: "Science",
        },
      },
      "im:releaseDate": {
        label: "2023-11-16T10:30:00-07:00",
        attributes: { label: "November 16, 2023" },
      },
    },
    {
      "im:name": { label: "The Comedy Club" },
      "im:image": [
        {
          label: "https://example.com/comedy1.png",
          attributes: { height: "55" },
        },
        {
          label: "https://example.com/comedy2.png",
          attributes: { height: "60" },
        },
        {
          label: "https://example.com/comedy3.png",
          attributes: { height: "170" },
        },
      ],
      summary: {
        label:
          "Laugh out loud with the funniest comedians from around the globe.",
      },
      "im:price": {
        label: "Free",
        attributes: { amount: "0", currency: "USD" },
      },
      "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
      rights: { label: "© 2023 Comedy Club" },
      title: { label: "The Comedy Club - Hilarious Stand-Up and More" },
      link: {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://example.com/comedyclub",
        },
      },
      id: {
        label: "https://example.com/comedyclub",
        attributes: { "im:id": "567890123" },
      },
      "im:artist": {
        label: "Comedy Club Network",
        attributes: { href: "https://example.com/comedyclubnetwork" },
      },
      category: {
        attributes: {
          "im:id": "1320",
          term: "Comedy",
          scheme: "https://example.com/comedyscheme",
          label: "Comedy",
        },
      },
      "im:releaseDate": {
        label: "2023-11-17T14:45:00-07:00",
        attributes: { label: "November 17, 2023" },
      },
    },
  ];

  test("should render the correct elements of the Podcast passed", () => {
    render(<PodcastCard podcast={mockPodcasts[0]} />);

    const h2Text = screen.getByText(mockPodcasts[0].title.label);
    const pText = screen.getByText(/Tech Talk Network/i); // this equals to the artist of the first position of mockPodcast

    //console.log(prettyDOM(img as HTMLImageElement));
    expect(h2Text).toBeInTheDocument();
    expect(pText).toBeInTheDocument();
  });

  test("should render a link constructed correctly", () => {
    render(<PodcastCard podcast={mockPodcasts[0]} />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });

  test("should render a link constructed correctly", () => {
    render(<PodcastCard podcast={mockPodcasts[0]} />);

    const linkToAnotherPage = document.querySelector("a")?.getAttribute("href");
    const podcastId = mockPodcasts[0].id.attributes["im:id"];

    expect(linkToAnotherPage).toEqual(`/podcast/${podcastId}`);
  });
});
