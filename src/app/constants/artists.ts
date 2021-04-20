import { STATUS_RELEASED } from "./projects";

export const GLITCH_CREATION_ARTIST = {
  hasDetailView: false,
  detailViewUrl: ["/", "GlitchCreation"],
  name: "GlitchCreation",
  avatar: "assets/img/avatar/Glitch Creation.jpg",
  banner: "assets/img/banner/Glitch Creation.jpeg",
  twitter: "GlitchCreation",
  facebook: null,
  instagram: null,
  discord: "https://discord.gg/bNKj3KQB", // 'https://discord.com/invite/ePJZBVwQNq',
  telegram: null, // 'https://t.me/spacebudz',
  youtube: null,
  reddit: null,
  webpage: null, // 'https://spacebudz.io/',
  tokenInfo: "10.000 tokens minted and released",
  priceInfo:
    "Starting at 10 ADA each, increasing the price every 1000 tokens (10, 20, ..., 90, 100)",
  dateRelease: "",
  status: STATUS_RELEASED,
  lastUpdated: "April 2021",
};

export const ARTIST_LIST = [GLITCH_CREATION_ARTIST];
