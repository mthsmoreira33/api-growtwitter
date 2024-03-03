import { repository } from "../db/prisma.connection";
import { ResponseDTO } from "../dtos/response.dto";
import { CreateRetweetDTO, UpdateRetweetDTO } from "../dtos/retweet.dto";
import { CreateTweetDTO, UpdateTweetDTO } from "../dtos/tweets.dto";
import { Retweet } from "../models/retweet.model";
import { Tweet } from "../models/tweet.model";
import { TweetType } from "../types/tweetType";

export class retweetService {
  public async findAll(): Promise<ResponseDTO> {
    const retweets = await repository.retweet.findMany();

    return {
      success: true,
      code: 200,
      message: "Retweets listados.",
      data: retweets,
    };
  }

  public async create(retweetDTO: CreateRetweetDTO): Promise<ResponseDTO> {
    const newRetweet = new Retweet(retweetDTO.content, retweetDTO.tweetType = "Retweet", retweetDTO.userId, retweetDTO.tweetId);

    const createdRetweet = await repository.retweet.create({
      data: {
        content: newRetweet.content,
        userId: retweetDTO.userId,
        tweetId: retweetDTO.tweetId
      },
    });

    return {
      success: true,
      code: 201,
      message: "Retweet criado com sucesso.",
      data: createdRetweet,
    };
  }
  public async findById(id: string): Promise<ResponseDTO> {
    const retweet = await repository.tweet.findUnique({
      where: { id },
    });

    if (!retweet) {
      throw new Error("Tweet não encontrado");
    }

    return {
      success: true,
      code: 200,
      message: "Tweet encontrado com sucesso.",
      data: retweet,
    };
  }

  public async update(
    retweetDTO: UpdateRetweetDTO,
  ): Promise<ResponseDTO> {
    const retweet = await repository.retweet.findUnique({
      where: { id: retweetDTO.id, userId: retweetDTO.userId, tweetId: retweetDTO.tweetId },
    });

    if (!retweet) {
      throw new Error("Tweet não encontrado");
    }

    const updatedRetweet = await repository.retweet.update({
      where: {
        id: retweetDTO.id,
        userId: retweetDTO.userId,
        tweetId: retweetDTO.tweetId
      },
      data: {
        content: retweetDTO.content
      },
    });

    return {
      success: true,
      code: 200,
      message: "Tweet atualizado com sucesso",
      data: updatedRetweet,
    };
  }

  public async delete(id: string, userId: string, tweetId: string): Promise<ResponseDTO> {
    const retweet = await repository.retweet.findUnique({
      where: { id, userId, tweetId },
    });

    if (!retweet) {
      throw new Error("Tweet não encontrado");
    }

    const deletedRetweet = await repository.retweet.delete({
      where: { id, userId, tweetId },
    });

    return {
      success: true,
      code: 200,
      message: "Tweet removido com sucesso.",
      data: deletedRetweet,
    };
  }
}
