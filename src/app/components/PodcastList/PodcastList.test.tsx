import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";

import { podcastsTemplate } from "@/assets";
import PodcastList from "./PodcastList";
import { Podcast } from "@/app/mocks/podcastList";

describe("PODCAST LIST", () => {
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
        attributes: { imId: "123456789" },
      },
      "im:artist": {
        label: "Tech Talk Network",
        attributes: { href: "https://example.com/techtalknetwork" },
      },
      category: {
        attributes: {
          imId: "1310",
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
        attributes: { imId: "987654321" },
      },
      "im:artist": {
        label: "Science Hour Network",
        attributes: { href: "https://example.com/sciencehournetwork" },
      },
      category: {
        attributes: {
          imId: "1315",
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
        attributes: { imId: "567890123" },
      },
      "im:artist": {
        label: "Comedy Club Network",
        attributes: { href: "https://example.com/comedyclubnetwork" },
      },
      category: {
        attributes: {
          imId: "1320",
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

  test("should render an input", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);
    // console.log(prettyDOM(view.container));

    const input = view.container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  test("should render a list <PodcastCard/> component", () => {
    const view = render(<PodcastList podcasts={mockPodcasts} />);

    const img = view.container.querySelectorAll("img");
    expect(img.length).toEqual(mockPodcasts.length);
  });
});
