"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";
import { useState, useEffect } from "react";
import { fetchPodcasts, getPodcasts } from "@/services/getPodcasts";

import constants from "@/constants.json";
import "../styles/index.scss";
import { Podcast } from "./mocks/podcastList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const callPodcasts = async () => {
      const newPodcasts = await fetchPodcasts();
      setPodcasts(newPodcasts);
      console.log(newPodcasts);
      setLoading(false);
    };

    callPodcasts();
  }, []);

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
