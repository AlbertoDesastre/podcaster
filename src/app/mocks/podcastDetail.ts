import PodcastEpisode from "../podcast/[id]/episode/page";
import { ApiResponse } from "./podcastList";

export type PodcastInfo = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
};

export type PodcastEpisode = {
  country: string;
  episodeUrl: string;
  previewUrl: string;
  feedUrl: string;
  closedCaptioning: string;
  artistIds: number[];
  collectionViewUrl: string;
  genres: { name: string; id: string }[];
  episodeGuid: string;
  description: string;
  shortDescription: string;
  releaseDate: string;
  trackTimeMillis: number;
  trackId: number;
  trackName: string;
  collectionId: number;
  collectionName: string;
  artworkUrl600: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  kind: string;
  wrapperType: string;
};

export type PodcastArtistAndEpisodesResults = {
  resultCount: number;
  results: [PodcastInfo, ...PodcastEpisode[]];
};

const podcastEpisodesApiResponse: ApiResponse = {
  contents:
    '\n\n\n{\n "resultCount":3,\n "results": [\n{"wrapperType":"track", "kind":"podcast", "artistId":1535844019, "collectionId":1535809341, "trackId":1535809341, "artistName":"The Joe Budden Network", "collectionName":"The Joe Budden Podcast", "trackName":"The Joe Budden Podcast", "collectionCensoredName":"The Joe Budden Podcast", "trackCensoredName":"The Joe Budden Podcast", "artistViewUrl":"https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4", "collectionViewUrl":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4", "feedUrl":"https://jbpod.libsyn.com/applepodcast", "trackViewUrl":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "collectionHdPrice":0, "releaseDate":"2023-11-15T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"explicit", "trackCount":436, "trackTimeMillis":10910, "country":"USA", "currency":"USD", "primaryGenreName":"Music", "contentAdvisoryRating":"Explicit", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg", "genreIds":["1310", "26"], "genres":["Music", "Podcasts"]}, \n{"country":"USA", "episodeUrl":"https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538", "previewUrl":"https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538", "feedUrl":"https://jbpod.libsyn.com/applepodcast", "closedCaptioning":"none", "artistIds":[1535844019], "collectionViewUrl":"https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4", "genres":[{"name":"Music", "id":"1310"}], "episodeGuid":"4a28ac23-1a37-45e4-99a9-053d3305d2c9", \n"description":"The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP reacts to Meek Mill & Rick Ross selling 35K first week (59:33), and Chrisean Rock deleted her socials after being accused of assault at a Tamar Braxton concert (1:03:00). Also, Lil Yachty says Hip-Hop is in a terrible place (1:36:36), *SPOILER ALERT* Joe recaps ‘The Killer’ on Netflix (1:40:00), Tasha K is being sued again (1:58:04), a debate takes place over the Joan Rivers ‘Dark Side of Comedy’ episode (2:05:20), Part of the Show (2:21:59), + MORE!\\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\\n  \\n Sleeper Picks: \\n Joe | Rick Ross & Meek Mill (feat. Jeremih) - “Gold Medals”\\n Ice | Lola Brooke - “Dear Dennis”\\n Parks | Ben Kenobe - “Blood”\\n Ish | Naomi Sharon - “If This Is Love”\\n Melyssa | Mezraa & jjad - “Subtle Games”", \n"shortDescription":"The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP...", "releaseDate":"2023-11-15T08:00:00Z", "trackTimeMillis":10910000, "trackId":1000634878746, "trackName":"Episode 675 | \\"The Wind Blew\\"", "collectionId":1535809341, "collectionName":"The Joe Budden Podcast", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg", "artistViewUrl":"https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4", "contentAdvisoryRating":"Explicit", "trackViewUrl":"https://podcasts.apple.com/us/podcast/episode-675-the-wind-blew/id1535809341?i=1000634878746&uo=4", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}, \n{"country":"USA", "episodeUrl":"https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_674.mp3?dest-id=2422538", "previewUrl":"https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_674.mp3?dest-id=2422538", "feedUrl":"https://jbpod.libsyn.com/applepodcast", "closedCaptioning":"none", "artistIds":[1535844019], "collectionViewUrl":"https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4", "genres":[{"name":"Music", "id":"1310"}], "episodeGuid":"e03c68d8-7b3f-4efd-8dd8-42e55b0bcb64", \n"description":"The JBP returns to the airwaves as they begin with discussing the recent interview between Jeezy & Nia Long that was released earlier this week (24:30). In new music, Chris Brown drops his new project ‘11:11’ (46:10), BJ the Chicago Kid releases his album ‘Gravy’ (59:39), and Meek Mill & Rick Ross drop ‘Too Good To Be True’ (1:07:04). Also, the JBP goes through the Hip-Hop & R&B Grammy Nominations (1:29:28), KeKe Palmer files restraining order on her ex (1:52:02), an update on the Young Thug Trial (1:57:25), a new Frank Ocean snippet (2:09:16), Lori Harvey & Damson Idris announce their split (2:17:39), + MORE!\\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\\n  \\n Sleeper Picks: \\n Joe | Chris Brown (feat. Fridayy) - “No One Else”\\n Ice | Chris Brown (feat. Justin Bieber) - “Double Negative” \\n Parks | BJ The Chicago Kid (feat. Freddie Gibbs) - “Liquor Store In The Sky” \\n Ish | Breez Kennedy & Genia - “Need U Tonite” ", \n"shortDescription":"The JBP returns to the airwaves as they begin with discussing the recent interview between Jeezy & Nia Long that was released earlier this week (24:30). In new music, Chris Brown drops his new project ‘11:11’ (46:10), BJ the Chicago Kid...", "releaseDate":"2023-11-11T08:00:00Z", "trackTimeMillis":10959000, "trackId":1000634453100, "trackName":"Episode 674 | \\"Refer to The Tag\\"", "collectionId":1535809341, "collectionName":"The Joe Budden Podcast", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg", "artistViewUrl":"https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4", "contentAdvisoryRating":"Explicit", "trackViewUrl":"https://podcasts.apple.com/us/podcast/episode-674-refer-to-the-tag/id1535809341?i=1000634453100&uo=4", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}]\n}\n\n\n',
  status: {
    url: "https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=5",
    content_type: "text/javascript; charset=utf-8",
    http_code: 200,
    response_time: 80,
    content_length: 6434,
  },
};

const podcastEpisodesResults: PodcastArtistAndEpisodesResults = JSON.parse(
  podcastEpisodesApiResponse.contents
);

export { podcastEpisodesApiResponse, podcastEpisodesResults };
