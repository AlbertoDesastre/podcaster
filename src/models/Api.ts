import { Feed } from "./Podcast";

export type ApiContent = {
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
