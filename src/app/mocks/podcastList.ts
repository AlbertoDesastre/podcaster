export type Podcast = {
  "im:name": { label: string };
  "im:image": Array<{ label: string; attributes: { height: string } }>;
  summary: { label: string };
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  "im:contentType": { attributes: { term: string; label: string } };
  rights: { label: string };
  title: { label: string };
  link: { attributes: { rel: string; type: string; href: string } };
  id: { label: string; attributes: { "im:id": string } };
  "im:artist": { label: string; attributes: { href: string } };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": { label: string; attributes: { label: string } };
};

export type Feed = {
  author: { name: { label: string }; uri: { label: string } };
  entry: Podcast[];
};

type ApiContent = {
  feed: Feed;
  updated: { label: string };
  rights: { label: string };
  title: { label: string };
  icon: { label: string };
  link: { attributes: { rel: string; type: string; href: string } }[];
};

export type Status = {
  url: string;
  content_type: string;
  http_code: number;
  response_time: number;
  content_length: number;
};

export type ApiResponse = {
  contents: string;
  status: Status;
};

const podcastApiResponse: ApiResponse = {
  contents:
    '{"feed":{"author":{"name":{"label":"iTunes Store"}, "uri":{"label":"http://www.apple.com/itunes/"}}, "entry":[\n{"im:name":{"label":"The Joe Budden Podcast"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© All rights reserved"}, "title":{"label":"The Joe Budden Podcast - The Joe Budden Network"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2", "attributes":{"im:id":"1535809341"}}, "im:artist":{"label":"The Joe Budden Network", "attributes":{"href":"https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"}}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-11-11T00:00:00-07:00", "attributes":{"label":"November 11, 2023"}}}, \n{"im:name":{"label":"Class of \'88 with Will Smith"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d7/9a/1a/d79a1a7e-347d-69a8-b087-dfc73062f4a1/mza_17711403821719891754.jpeg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"In the US, hip hop reigns as the genre that influences every aspect of our culture. From fashion to film, the dominance of this prolific sound can be traced back to one year - 1988. From Public Enemy to The Fresh Prince, these twelve months gave rise to the superstars and styles that still resonate in songs released today. Through the unique perspective and personal experiences of Will Smith, Class of ’88 reveals the milestone moments, albums and artists that inspired a sonic evolution and secured 1988 as hip hop’s most important year. Rich with archival material, new interviews with hip hop’s biggest stars, and personal recollections from Will himself, Class of ’88 delivers fresh untold stories from the year that hip hop overcame the forces that were hell bent on blocking its rise.\\nThis series features interviews and stories from the revolutionary Artists that impacted that year and many more afterwards, including: Queen Latifah, Jazzy Jeff, DMC, Salt-N-Pepa, Chuck D, Fab Five Freddy, Rakim, Slick Rick, DJ Red Alert, and Rick Rubin.\\nListen to Class of \'88 wherever you get your podcasts. You can binge the entire series, right now, on the Amazon Music App or Audible."}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Wondery, LLC. All rights reserved."}, "title":{"label":"Class of \'88 with Will Smith - Audible | Wondery"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/class-of-88-with-will-smith/id1708275587?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/class-of-88-with-will-smith/id1708275587?uo=2", "attributes":{"im:id":"1708275587"}}, "im:artist":{"label":"Audible | Wondery"}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-10-25T21:00:00-07:00", "attributes":{"label":"October 25, 2023"}}}, \n{"im:name":{"label":"Friday Night Karaoke"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Friday Night Karaoke"}, "title":{"label":"Friday Night Karaoke - Friday Night Karaoke"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2", "attributes":{"im:id":"1574029840"}}, "im:artist":{"label":"Friday Night Karaoke"}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-10-08T00:14:00-07:00", "attributes":{"label":"October 8, 2023"}}}, \n{"im:name":{"label":"Drink Champs"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Interval Presents"}, "title":{"label":"Drink Champs - Interval Presents"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2", "attributes":{"im:id":"1096830182"}}, "im:artist":{"label":"Interval Presents", "attributes":{"href":"https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2"}}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-11-10T00:00:00-07:00", "attributes":{"label":"November 10, 2023"}}}, \n{"im:name":{"label":"Million Dollaz Worth Of Game"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\\n\\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Barstool Sports, Inc."}, "title":{"label":"Million Dollaz Worth Of Game - Barstool Sports"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2", "attributes":{"im:id":"1460157002"}}, "im:artist":{"label":"Barstool Sports", "attributes":{"href":"https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2"}}, "category":{"attributes":{"im:id":"1523", "term":"Music Commentary", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2", "label":"Music Commentary"}}, "im:releaseDate":{"label":"2023-11-07T16:30:00-07:00", "attributes":{"label":"November 7, 2023"}}}], "updated":{"label":"2023-11-12T07:45:29-07:00"}, "rights":{"label":"Copyright 2008 Apple Inc."}, "title":{"label":"iTunes Store: Top Podcasts in Music"}, "icon":{"label":"http://itunes.apple.com/favicon.ico"}, "link":[\n{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3"}}, \n{"attributes":{"rel":"self", "href":"https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json"}}], "id":{"label":"https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json"}}}',
  status: {
    url: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    content_type: "text/javascript; charset=UTF-8",
    http_code: 200,
    response_time: 8,
    content_length: 34880,
  },
};

const responseContentJson: ApiContent = JSON.parse(podcastApiResponse.contents);

export { podcastApiResponse, responseContentJson };
