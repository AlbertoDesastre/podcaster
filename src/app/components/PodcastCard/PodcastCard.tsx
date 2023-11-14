import { StyledPodcastCard } from "./StyledPodcastCard";
import Link from "next/link";
import constants from "@/constants.json";
import { Podcast } from "@/app/mocks/podcastList";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  const id = podcast.id.attributes.imId;
  return (
    <StyledPodcastCard>
      <article>
        <Link
          key={podcast.id.label}
          href={constants.ROUTES["podcast-detail"] + `${id}`}
        >
          <img alt="podcast-image" src={podcast["im:image"][2].label} />
          <div className="box-separator">
            <h2>{podcast.title.label}</h2>
            <h3>Author: {podcast["im:artist"].label}</h3>
          </div>
        </Link>
      </article>
    </StyledPodcastCard>
  );
}

export default PodcastCard;
