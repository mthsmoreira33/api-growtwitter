import { TweetType } from "../types/tweetType";

export interface CreateRetweetDTO {
  content: string;
  tweetType: TweetType;
  userId: string;
  tweetId: string;
}

export interface UpdateRetweetDTO {
  id: string;
  content: string;
  userId: string;
  tweetId: string
}
