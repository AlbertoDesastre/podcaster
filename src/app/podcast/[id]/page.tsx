"use client";

import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "./PodcastFigure/PodcastFigure";

import PodcastEpisodeList from "./PodcastEpisodeList/PodcastEpisodeList";
import "./page.scss";
import { useEpisodes } from "@/hooks/useEpisodes";

function PodcastDetail({ params }: { params: { id: string } }) {
  // this id it's the artistId coming from ^ previous page ^.
  const { episodes, podcast, loading } = useEpisodes({ artistId: params.id });

  return (
    <Dashboard loading={false}>
      {loading && <h1>Loading episodes...</h1>}

      {podcast ? (
        <div className="podcast-episodes-container">
          <PodcastFigure
            title={podcast.trackName}
            artist={podcast.artistName}
            description={podcast.trackName}
            params={params}
          />

          {/* It's necessary to pass the object params since it will be used to redirect to the correct podcast when navigating */}
          <PodcastEpisodeList podcastEpisodes={episodes} params={params} />
        </div>
      ) : (
        !loading && <h1>Podcast not found</h1>
      )}

      {}
    </Dashboard>
  );
}

export default PodcastDetail;
