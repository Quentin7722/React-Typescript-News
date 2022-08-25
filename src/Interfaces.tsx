import { Dispatch, SetStateAction } from "react";

export interface ArticleInterface {
  title: string;
  description: string;
  author: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
  url: string;
  source: { id: any; name: string };
}

export interface HeaderInterface {
  requestUrl: string;
  setRequestUrl: Dispatch<SetStateAction<string>>;
}
