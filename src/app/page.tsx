"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";
import { usePodcasts } from "@/services/getPodcasts";

import "../styles/index.scss";

export default function Home() {
  const { loading, podcasts } = usePodcasts();

  return (
    <Dashboard loading={loading}>
      {!loading && (
        <PodcastOverview>
          <PodcastList podcasts={podcasts} />
        </PodcastOverview>
      )}
    </Dashboard>
  );
}
