import Link from "next/link";
import { StyledPodcastEpisodeList } from "./StyledPodcastEpisodeList";
import { PodcastEpisode } from "@/models/PodcastEpisode";

function PodcastEpisodeList({
  episodes,
  params,
}: {
  episodes: PodcastEpisode[];
  params: { id: string };
}) {
  // console.log(podcastEpisodes);

  return (
    <StyledPodcastEpisodeList>
      <h1>Episodes: {episodes.length}</h1>

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>

            {episodes.map((episode) => {
              return (
                <tr key={episode.episodeGuid}>
                  <td>
                    <Link
                      href={`/podcast/${params.id}/episode/${episode.episodeUrl}`}
                    >
                      {episode.trackName}
                    </Link>
                  </td>
                  <td> {episode.releaseDate}</td>
                  <td> {episode.episodeContentType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledPodcastEpisodeList>
  );
}

export default PodcastEpisodeList;
