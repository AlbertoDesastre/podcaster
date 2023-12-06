import Link from "next/link";
import { StyledPodcasFigure } from "./StyledPodcastFigure";

function PodcastFigure({
  title,
  artist,
  summary,
  params,
}: {
  title: string;
  artist: string;
  summary: string;
  params: {
    id: string;
    episodeId?: string;
  };
}) {
  return (
    <StyledPodcasFigure className="podcast-figure">
      <Link href={`/podcast/${params.id}`}>
        <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
      </Link>
      <div className="artist-and-title-container">
        <Link href={`/podcast/${params.id}`}>
          <h2> {title}</h2>
        </Link>
        <Link href={`/podcast/${params.id}`}>
          <h3>by {artist}</h3>
        </Link>
      </div>
      <div className="description-container">
        <h4>Description:</h4>
        <p>{summary} </p>
      </div>
    </StyledPodcasFigure>
  );
}

export default PodcastFigure;
