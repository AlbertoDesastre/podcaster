import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { prettyDOM, render, screen } from "@testing-library/react";

import Dashboard from "./Dashboard";
import PodcastOverview from "../PodcastOverview/PodcastOverview";
import PodcastList from "../PodcastList/PodcastList";

import { Podcast } from "@/app/mocks/podcastList";

describe("DASHBOARD", () => {
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

  test("should render loading if the data still fetching", () => {
    render(
      <Dashboard loading={true}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(() => screen.getByTestId("loader")).toThrow();
  });

  test("should stay on the same route if it clicks the 'Podcaster'that has route '/' in it ", async () => {
    const user = userEvent.setup();

    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={mockPodcasts}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    // notice that the H1 that has "Podcaster" text gets treated as a "link" because of being wrapped inside a link
    const home = screen.getByRole("link", { name: "Podcaster" });
    expect(home).toBeInTheDocument();

    const podcast = screen.getByText(/Tech Talk Network/i);
    expect(podcast).toBeInTheDocument();

    // user click on the 'home' button that redirects to '/' route (it's actually the very same page they are on it right now)
    await user.click(home);

    // user should be on the same route that has the list of podcasts
    expect(podcast).toBeInTheDocument();
  });

  test("dashboard should render a section owned by <PodcastList>", () => {
    render(
      <Dashboard loading={false}>
        <PodcastOverview>
          <PodcastList podcasts={[]} />
        </PodcastOverview>
      </Dashboard>
    );
    //console.log(prettyDOM(view.container));

    // this is owned by <PodcastList>
    const podcastFilter = screen.getByPlaceholderText(/Filter podcasts.../i);
    expect(podcastFilter).toBeInTheDocument();
  });
});
