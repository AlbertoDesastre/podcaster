import Link from "next/link";
import { StyledPodcastEpisodeList } from "./StyledPodcastEpisodeList";
import { PodcastEpisode } from "@/models/PodcastEpisode";
import { format } from "date-fns";

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
                      href={`/podcast/${params.id}/episode/${episode.episodeGuid}`}
                    >
                      {episode.trackName}
                    </Link>
                  </td>
                  <td> {format(new Date(episode.releaseDate), "PPP")}</td>
                  <td>
                    {new Date(episode.trackTimeMillis).getMinutes() +
                      ":" +
                      new Date(episode.trackTimeMillis).getSeconds()}
                  </td>
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
