import { TweetType } from "../types/tweetType"

export interface CreateTweetDTO {
    content: string
    tweetType: TweetType
    userId: string
}

export interface UpdateTweetDTO
{
    id: string
    content?: string
    tweetType?: TweetType
}

