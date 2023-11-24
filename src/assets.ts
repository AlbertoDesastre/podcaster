import { PodcastEpisode, PodcastInfo } from "./models/PodcastEpisode";

const episodesDetail = [
  {
    id: "1",
    title: "Rock Music Podcast",
    summary: "An exciting episode about the evolution of rock 'n' roll.",
    audio: "",
  },
  {
    id: "2",
    title: "Rock Music Podcast",
    summary: "Discover rock legends in this special episode.",
    audio: "",
  },
  {
    id: "3",
    title: "Rock Music Podcast",
    summary: "Rock out to the most iconic songs of all time in this episode.",
    audio: "",
  },
  {
    id: "4",
    title: "Cooking Talks",
    summary: "Learn to cook delicious dishes in this cooking episode.",
    audio: "",
  },
  {
    id: "5",
    title: "Cooking Talks",
    summary: "Secrets of chefs revealed in this exclusive episode.",
    audio: "",
  },
  {
    id: "6",
    title: "Cooking Talks",
    summary: "Flavors and aromas that awaken your senses in this episode.",
    audio: "",
  },
  {
    id: "7",
    title: "Mystery Stories",
    summary: "Solve dark mysteries in this intriguing episode.",
    audio: "",
  },
  {
    id: "8",
    title: "Mystery Stories",
    summary: "Supernatural mysteries and detectives in this special episode.",
    audio: "",
  },
  {
    id: "9",
    title: "Mystery Stories",
    summary: "Night of mystery and suspense in this exciting episode.",
    audio: "",
  },
  {
    id: "10",
    title: "Science Talks",
    summary: "Exploration of science and its wonders in this episode.",
    audio: "",
  },
  {
    id: "11",
    title: "Science Talks",
    summary: "Discover the latest scientific advances in this episode.",
    audio: "",
  },
  {
    id: "12",
    title: "Science Talks",
    summary: "Discussions and talks about science in this special episode.",
    audio: "",
  },
  {
    id: "13",
    title: "Tech News Updates",
    summary: "Technology news and updates in this episode.",
    audio: "",
  },
  {
    id: "14",
    title: "Tech News Updates",
    summary: "Technological innovations and gadgets in this exciting episode.",
    audio: "",
  },
  {
    id: "15",
    title: "Tech News Updates",
    summary: "The latest technological trends are discussed in this episode.",
    audio: "",
  },
  {
    id: "16",
    title: "Business Success Stories",
    summary: "Successful entrepreneurs share their stories in this episode.",
    audio: "",
  },
  {
    id: "17",
    title: "Business Success Stories",
    summary: "Secrets of business success revealed in this special episode.",
    audio: "",
  },
  {
    id: "18",
    title: "Business Success Stories",
    summary: "Learn from business leaders in this inspiring episode.",
    audio: "",
  },
  {
    id: "19",
    title: "Travel Adventures",
    summary: "Epic travels and amazing adventures in this travel episode.",
    audio: "",
  },
  {
    id: "20",
    title: "Travel Adventures",
    summary: "Discover stunning destinations in this exciting episode.",
    audio: "",
  },
  {
    id: "21",
    title: "Travel Adventures",
    summary: "Travel tips and incredible experiences in this episode.",
    audio: "",
  },
  {
    id: "22",
    title: "History Uncovered",
    summary: "Discover historical events and mysteries in this episode.",
    audio: "",
  },
  {
    id: "23",
    title: "History Uncovered",
    summary: "Surprising revelations from history in this special episode.",
    audio: "",
  },
  {
    id: "24",
    title: "History Uncovered",
    summary: "Great historical figures are explored in this episode.",
    audio: "",
  },
  {
    id: "25",
    title: "Health and Wellness Tips",
    summary: "Tips for a healthy life and well-being in this episode.",
    audio: "",
  },
  {
    id: "26",
    title: "Health and Wellness Tips",
    summary: "Mental and physical well-being in this special episode.",
    audio: "",
  },
  {
    id: "27",
    title: "Health and Wellness Tips",
    summary: "Secrets to staying healthy in this informative episode.",
    audio: "",
  },
  {
    id: "28",
    title: "Comedy Hour",
    summary: "Laughter and fun in this comedy episode.",
    audio: "",
  },
  {
    id: "29",
    title: "Comedy Hour",
    summary: "Comic performances and jokes in this special episode.",
    audio: "",
  },
  {
    id: "30",
    title: "Comedy Hour",
    summary: "Comedy that will make you laugh out loud in this episode.",
    audio: "",
  },
  {
    id: "31",
    title: "Home Improvement",
    summary:
      "Discover the latest trends and tips for transforming your home in this insightful episode. Our experts guide you through DIY projects and home decor ideas.",
    audio: "",
  },
  {
    id: "32",
    title: "Home Improvement",
    summary:
      "Revamp your living spaces with expert advice in this home improvement episode. From small changes to major renovations, we cover it all.",
    audio: "",
  },
  {
    id: "33",
    title: "Home Improvement",
    summary:
      "Unleash your inner interior designer with creative home improvement ideas in this special episode. Get ready to beautify your surroundings.",
    audio: "",
  },
  {
    id: "34",
    title: "Gardening Tips",
    summary:
      "Nurture your green thumb with gardening secrets in this episode. Learn how to grow and care for a variety of plants, from flowers to vegetables.",
    audio: "",
  },
  {
    id: "35",
    title: "Gardening Tips",
    summary:
      "Join us in a green adventure and explore gardening in-depth in this special episode. Cultivate your gardening skills with expert guidance.",
    audio: "",
  },
  {
    id: "36",
    title: "Gardening Tips",
    summary:
      "Dig deep into the world of gardening and horticulture in this gardening episode. Discover the joys of planting and watch your garden bloom.",
    audio: "",
  },
  {
    id: "37",
    title: "Motivational Talks",
    summary:
      "Ignite your inner drive and find inspiration in this motivational episode. Our speakers share stories of determination and success to motivate you.",
    audio: "",
  },
  {
    id: "38",
    title: "Motivational Talks",
    summary:
      "Empower your spirit and boost your confidence in this special motivational episode. Dive into personal development and self-improvement with us.",
    audio: "",
  },
  {
    id: "39",
    title: "Motivational Talks",
    summary:
      "Transform your life with motivational insights and personal growth strategies in this episode. Get ready to become the best version of yourself.",
    audio: "",
  },
  {
    id: "40",
    title: "Wildlife Encounters",
    summary:
      "Embark on wildlife adventures and discover fascinating creatures in this thrilling episode. Join us on safaris and explorations around the world.",
    audio: "",
  },
  {
    id: "41",
    title: "Wildlife Encounters",
    summary:
      "Explore the wonders of nature and wildlife in this wildlife episode. Get up close with animals and ecosystems you've only dreamed of.",
    audio: "",
  },
  {
    id: "42",
    title: "Wildlife Encounters",
    summary:
      "Get ready for a wild ride in this special wildlife episode. From the jungles to the savannah, we bring the beauty of nature to your ears.",
    audio: "",
  },
  {
    id: "43",
    title: "Space Explorations",
    summary:
      "Embark on an interstellar journey and explore the mysteries of the cosmos in this space exploration episode. Join us in unraveling the universe.",
    audio: "",
  },
  {
    id: "44",
    title: "Space Explorations",
    summary:
      "Discover the latest advancements in space exploration and astronomy in this space episode. Journey beyond Earth and into the depths of the universe.",
    audio: "",
  },
  {
    id: "45",
    title: "Space Explorations",
    summary:
      "Engage with cosmic wonders and astronomical discoveries in this special space episode. Prepare for an odyssey to the stars and galaxies.",
    audio: "",
  },
  {
    id: "46",
    title: "Finance Insights",
    summary:
      "Unlock the secrets of financial success and wealth management in this finance episode. Expert advice to help you achieve your financial goals.",
    audio: "",
  },
  {
    id: "47",
    title: "Finance Insights",
    summary:
      "Navigate the world of finance and investments with ease in this finance episode. From stocks to real estate, we decode the world of money.",
    audio: "",
  },
  {
    id: "48",
    title: "Finance Insights",
    summary:
      "Get financially savvy with valuable tips and insights in this special finance episode. Take control of your money and secure your future.",
    audio: "",
  },
  {
    id: "49",
    title: "Art and Creativity",
    summary:
      "Unleash your artistic potential and creativity in this episode. Explore various art forms and find inspiration for your next masterpiece.",
    audio: "",
  },
  {
    id: "50",
    title: "Art and Creativity",
    summary:
      "Dive into the world of art, design, and creative expression in this special episode. Get inspired by the works of renowned artists and creators.",
    audio: "",
  },
  {
    id: "51",
    title: "Art and Creativity",
    summary:
      "Experience the magic of creativity in this artistic episode. Join us in celebrating the beauty and innovation of human imagination.",
    audio: "",
  },
  {
    id: "52",
    title: "Healthy Living",
    summary:
      "Discover the path to a healthier and more balanced life in this episode. We cover physical, mental, and emotional well-being for a better you.",
    audio: "",
  },
  {
    id: "53",
    title: "Healthy Living",
    summary:
      "Enhance your health and well-being with expert guidance in this special episode. Learn the secrets to living a long and fulfilling life.",
    audio: "",
  },
  {
    id: "54",
    title: "Healthy Living",
    summary:
      "Empower your health journey with insights and knowledge in this healthy living episode. Take charge of your well-being and vitality.",
    audio: "",
  },
  {
    id: "55",
    title: "Travel Diaries",
    summary:
      "Explore the world through the eyes of intrepid travelers in this travel episode. From exotic destinations to hidden gems, we share travel tales.",
    audio: "",
  },
  {
    id: "56",
    title: "Travel Diaries",
    summary:
      "Get ready for remarkable adventures and travel tales in this special episode. We take you to breathtaking places and share unforgettable experiences.",
    audio: "",
  },
  {
    id: "57",
    title: "Travel Diaries",
    summary:
      "Wanderlust and wanderlust-inducing stories await you in this travel episode. Join us on epic journeys and discover the beauty of our planet.",
    audio: "",
  },
  {
    id: "58",
    title: "Science Experiments",
    summary:
      "Unlock the wonders of science through hands-on experiments in this science episode. Join us in exploring scientific concepts in a fun and engaging way.",
    audio: "",
  },
  {
    id: "59",
    title: "Science Experiments",
    summary:
      "Get ready to be amazed by the world of scientific discovery in this special science episode. Dive into experiments that make learning fun and fascinating.",
    audio: "",
  },
  {
    id: "60",
    title: "Science Experiments",
    summary:
      "Experiment, explore, and expand your knowledge in this exciting science episode. Discover the fascinating world of physics, chemistry, and biology.",
    audio: "",
  },
  {
    id: "61",
    title: "Technology Trends",
    summary:
      "Stay up-to-date with the ever-changing world of technology in this episode. We explore the latest innovations and trends shaping the future.",
    audio: "",
  },
  {
    id: "62",
    title: "Technology Trends",
    summary:
      "Embark on a journey through the tech landscape and uncover groundbreaking developments in this special technology episode.",
    audio: "",
  },
  {
    id: "63",
    title: "Technology Trends",
    summary:
      "Experience the fast-paced world of technology in this episode. From gadgets to AI, we delve into the tech that's changing our lives.",
    audio: "",
  },
  {
    id: "64",
    title: "Nature Explorations",
    summary:
      "Immerse yourself in the beauty of the natural world in this episode. Join us on hikes, safaris, and adventures to explore Earth's wonders.",
    audio: "",
  },
  {
    id: "65",
    title: "Nature Explorations",
    summary:
      "Discover the hidden treasures of the great outdoors with our nature explorations in this special episode. Connect with the wilderness and wildlife.",
    audio: "",
  },
  {
    id: "66",
    title: "Nature Explorations",
    summary:
      "Get ready for an ecological journey and connect with Mother Nature in this nature exploration episode. Explore diverse ecosystems and landscapes.",
    audio: "",
  },
  {
    id: "67",
    title: "Business Insights",
    summary:
      "Navigate the complex world of business with insights and strategies in this episode. From startups to corporations, we cover it all.",
    audio: "",
  },
  {
    id: "68",
    title: "Business Insights",
    summary:
      "Uncover the secrets of successful entrepreneurship and business leadership in this special business episode. Learn from industry experts.",
    audio: "",
  },
  {
    id: "69",
    title: "Business Insights",
    summary:
      "Gain the knowledge and skills needed to thrive in the world of commerce with valuable business insights in this episode.",
    audio: "",
  },
  {
    id: "70",
    title: "Healthy Cooking",
    summary:
      "Delight your taste buds and nourish your body with healthy cooking in this episode. We share delicious and nutritious recipes for all.",
    audio: "",
  },
  {
    id: "71",
    title: "Healthy Cooking",
    summary:
      "Explore the art of cooking and nutrition in this special episode. From farm to table, we bring you the best in healthy and tasty dishes.",
    audio: "",
  },
  {
    id: "72",
    title: "Healthy Cooking",
    summary:
      "Enhance your culinary skills and embrace a healthier lifestyle in this healthy cooking episode. Discover the joys of mindful eating.",
    audio: "",
  },
  {
    id: "73",
    title: "Space Chronicles",
    summary:
      "Embark on a cosmic journey and unravel the mysteries of the universe in this space chronicles episode. Join us in exploring the cosmos.",
    audio: "",
  },
  {
    id: "74",
    title: "Space Chronicles",
    summary:
      "Experience the wonders of space and astronomy in this special space episode. Venture beyond our world and gaze into the infinite cosmos.",
    audio: "",
  },
  {
    id: "75",
    title: "Space Chronicles",
    summary:
      "Prepare for a celestial adventure and cosmic discoveries in this space episode. Traverse galaxies and uncover the beauty of the cosmos.",
    audio: "",
  },
  {
    id: "76",
    title: "Adventure Time",
    summary:
      "Get ready for thrilling adventures and extraordinary journeys in this episode. We take you to the world's most exciting and daring escapades.",
    audio: "",
  },
  {
    id: "77",
    title: "Adventure Time",
    summary:
      "Join us on adrenaline-pumping expeditions and adventures in this special episode. Experience heart-pounding moments and remarkable feats.",
    audio: "",
  },
  {
    id: "78",
    title: "Adventure Time",
    summary:
      "Embrace your inner adventurer and explore the unknown in this adventure time episode. From mountain peaks to deep oceans, the world is your playground.",
    audio: "",
  },
  {
    id: "79",
    title: "World History",
    summary:
      "Dive into the annals of history and unravel the stories of our world in this episode. Explore the events and figures that shaped our past.",
    audio: "",
  },
  {
    id: "80",
    title: "World History",
    summary:
      "Discover the richness of our shared history in this special history episode. From ancient civilizations to modern revolutions, we journey through time.",
    audio: "",
  },
  {
    id: "81",
    title: "World History",
    summary:
      "Travel through time and across continents in this history episode. The past comes alive as we recount the tales of human civilization.",
    audio: "",
  },
  {
    id: "82",
    title: "Fashion Trends",
    summary:
      "Step into the glamorous world of fashion and style in this episode. Get the latest fashion insights and trends from the runways of the world.",
    audio: "",
  },
  {
    id: "83",
    title: "Fashion Trends",
    summary:
      "Celebrate the art of dressing and self-expression with our fashion trends in this special episode. From haute couture to street style, we cover it all.",
    audio: "",
  },
  {
    id: "84",
    title: "Fashion Trends",
    summary:
      "Experience the beauty of fashion and design in this fashion trends episode. Discover the designers, trends, and styles that define our culture.",
    audio: "",
  },
  {
    id: "85",
    title: "Science Discoveries",
    summary:
      "Witness the wonders of scientific discovery in this episode. Dive into groundbreaking experiments and research that reshape our understanding of the world.",
    audio: "",
  },
  {
    id: "86",
    title: "Science Discoveries",
    summary:
      "Explore the frontiers of scientific knowledge and innovation in this special science episode. From physics to biology, we delve into the mysteries of the universe.",
    audio: "",
  },
  {
    id: "87",
    title: "Science Discoveries",
    summary:
      "Embrace the scientific spirit and curiosity in this science discovery episode. Be part of the journey to uncover the hidden truths of the universe.",
    audio: "",
  },
  {
    id: "88",
    title: "Travel Journals",
    summary:
      "Get lost in the pages of travel journals and embark on epic voyages in this episode. Join us on captivating journeys to the world's most incredible destinations.",
    audio: "",
  },
  {
    id: "89",
    title: "Travel Journals",
    summary:
      "Immerse yourself in the adventures of globe-trotters and travel enthusiasts in this special travel journal episode. Experience cultures, sights, and sounds from around the globe.",
    audio: "",
  },
  {
    id: "90",
    title: "Travel Journals",
    summary:
      "Journey across the world and savor the tales of travel in this travel journal episode. From remote villages to bustling cities, every destination has a story.",
    audio: "",
  },
];

const mockPodcastInfo: PodcastInfo = {
  wrapperType: "track",
  kind: "podcast",
  artistId: 1535844019,
  collectionId: 1535809341,
  trackId: 1535809341,
  artistName: "The Joe Budden Network",
  collectionName: "The Joe Budden Podcast",
  trackName: "The Joe Budden Podcast",
  collectionCensoredName: "The Joe Budden Podcast",
  trackCensoredName: "The Joe Budden Podcast",
  artistViewUrl:
    "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4",
  collectionViewUrl:
    "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
  feedUrl: "https://jbpod.libsyn.com/applepodcast",
  trackViewUrl:
    "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
  artworkUrl30:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg",
  artworkUrl60:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
  artworkUrl100:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg",
  collectionPrice: 0.0,
  trackPrice: 0.0,
  collectionHdPrice: 0,
  releaseDate: "2023-11-15T08:00:00Z",
  collectionExplicitness: "notExplicit",
  trackExplicitness: "explicit",
  trackCount: 436,
  trackTimeMillis: 10910,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Music",
  artworkUrl600:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
  genreIds: ["1310", "26"],
  genres: ["Music", "Podcasts"],
};

const mockPodcastEpisode: PodcastEpisode[] = [
  {
    country: "USA",
    episodeUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538",
    previewUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538",
    feedUrl: "https://jbpod.libsyn.com/applepodcast",
    closedCaptioning: "none",
    artistIds: [1535844019],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
    genres: [{ name: "Music", id: "1310" }],
    episodeGuid: "4a28ac23-1a37-45e4-99a9-053d3305d2c9",
    description:
      "The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP reacts to Meek Mill & Rick Ross selling 35K first week (59:33), and Chrisean Rock deleted her socials after being accused of assault at a Tamar Braxton concert (1:03:00). Also, Lil Yachty says Hip-Hop is in a terrible place (1:36:36), *SPOILER ALERT* Joe recaps ‘The Killer’ on Netflix (1:40:00), Tasha K is being sued again (1:58:04), a debate takes place over the Joan Rivers ‘Dark Side of Comedy’ episode (2:05:20), Part of the Show (2:21:59), + MORE!\\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\\n \\n Sleeper Picks: \\n Joe | Rick Ross & Meek Mill (feat. Jeremih) - “Gold Medals”\\n Ice | Lola Brooke - “Dear Dennis”\\n Parks | Ben Kenobe - “Blood”\\n Ish | Naomi Sharon - “If This Is Love”\\n Melyssa | Mezraa & jjad - “Subtle Games”",
    shortDescription:
      "The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP...",
    releaseDate: "2023-11-15T08:00:00Z",
    trackTimeMillis: 10910000,
    trackId: 1000634878746,
    trackName: 'Episode 675 | "The Wind Blew"',
    collectionId: 1535809341,
    collectionName: "The Joe Budden Podcast",
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
    artistViewUrl:
      "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
    contentAdvisoryRating: "Explicit",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/episode-675-the-wind-blew/id1535809341?i=1000634878746&uo=4",
    artworkUrl160:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
  {
    country: "USA",
    episodeUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538",
    previewUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_675.mp3?dest-id=2422538",
    feedUrl: "https://jbpod.libsyn.com/applepodcast",
    closedCaptioning: "none",
    artistIds: [1535844019],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
    genres: [{ name: "Music", id: "1310" }],
    episodeGuid: "4a28ac23-1a37-45e4-99a9-053d3305d2c9",
    description:
      "The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP reacts to Meek Mill & Rick Ross selling 35K first week (59:33), and Chrisean Rock deleted her socials after being accused of assault at a Tamar Braxton concert (1:03:00). Also, Lil Yachty says Hip-Hop is in a terrible place (1:36:36), *SPOILER ALERT* Joe recaps ‘The Killer’ on Netflix (1:40:00), Tasha K is being sued again (1:58:04), a debate takes place over the Joan Rivers ‘Dark Side of Comedy’ episode (2:05:20), Part of the Show (2:21:59), + MORE!\\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\\n \\n Sleeper Picks: \\n Joe | Rick Ross & Meek Mill (feat. Jeremih) - “Gold Medals”\\n Ice | Lola Brooke - “Dear Dennis”\\n Parks | Ben Kenobe - “Blood”\\n Ish | Naomi Sharon - “If This Is Love”\\n Melyssa | Mezraa & jjad - “Subtle Games”",
    shortDescription:
      "The Bionic Six begins this episode recapping each of their weekends (15:05) before moving to the announcement of a new André 3000 solo project ‘New Blue Sun’ due this Friday (35:32). Drake & J. Cole announce a joint tour (53:52), the JBP...",
    releaseDate: "2023-11-15T08:00:00Z",
    trackTimeMillis: 10910000,
    trackId: 1000634878746,
    trackName: 'Episode 675 | "The Wind Blew"',
    collectionId: 1535809341,
    collectionName: "The Joe Budden Podcast",
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
    artistViewUrl:
      "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
    contentAdvisoryRating: "Explicit",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/episode-675-the-wind-blew/id1535809341?i=1000634878746&uo=4",
    artworkUrl160:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
  {
    country: "USA",
    episodeUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_674.mp3?dest-id=2422538",
    previewUrl:
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_674.mp3?dest-id=2422538",
    feedUrl: "https://jbpod.libsyn.com/applepodcast",
    closedCaptioning: "none",
    artistIds: [1535844019],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
    genres: [{ name: "Music", id: "1310" }],
    episodeGuid: "e03c68d8-7b3f-4efd-8dd8-42e55b0bcb64",
    description:
      "The JBP returns to the airwaves as they begin with discussing the recent interview between Jeezy & Nia Long that was released earlier this week (24:30). In new music, Chris Brown drops his new project ‘11:11’ (46:10), BJ the Chicago Kid releases his album ‘Gravy’ (59:39), and Meek Mill & Rick Ross drop ‘Too Good To Be True’ (1:07:04). Also, the JBP goes through the Hip-Hop & R&B Grammy Nominations (1:29:28), KeKe Palmer files restraining order on her ex (1:52:02), an update on the Young Thug Trial (1:57:25), a new Frank Ocean snippet (2:09:16), Lori Harvey & Damson Idris announce their split (2:17:39), + MORE!\\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/JoeBudden\\n \\n Sleeper Picks: \\n Joe | Chris Brown (feat. Fridayy) - “No One Else”\\n Ice | Chris Brown (feat. Justin Bieber) - “Double Negative” \\n Parks | BJ The Chicago Kid (feat. Freddie Gibbs) - “Liquor Store In The Sky” \\n Ish | Breez Kennedy & Genia - “Need U Tonite”",
    shortDescription:
      "The JBP returns to the airwaves as they begin with discussing the recent interview between Jeezy & Nia Long that was released earlier this week (24:30). In new music, Chris Brown drops his new project ‘11:11’ (46:10), BJ the Chicago Kid...",
    releaseDate: "2023-11-11T08:00:00Z",
    trackTimeMillis: 10959000,
    trackId: 1000634453100,
    trackName: 'Episode 674 | "Refer to The Tag"',
    collectionId: 1535809341,
    collectionName: "The Joe Budden Podcast",
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
    artistViewUrl:
      "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
    contentAdvisoryRating: "Explicit",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/episode-674-refer-to-the-tag/id1535809341?i=1000634453100&uo=4",
    artworkUrl160:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
];

export { mockPodcastInfo, mockPodcastEpisode, episodesDetail };
