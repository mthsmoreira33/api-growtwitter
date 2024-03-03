import { repository } from "../db/prisma.connection";
import { ResponseDTO } from "../dtos/response.dto";
import { CreateLikesDTO } from "../dtos/likes.dto";
import { Like } from "../models/like.model";

export class LikeService {
  public async findAll(): Promise<ResponseDTO> {
    const likes = await repository.like.findMany();

    return {
      success: true,
      code: 200,
      message: "Retweets listados.",
      data: likes,
    };
  }

  public async findById(id: string, userId: string, tweetId: string): Promise<ResponseDTO> {
    const like = await repository.like.findUnique({
      where: { id, userId, tweetId },
    });

    if (!like || !userId || !tweetId) {
      throw new Error("Like não encontrado");
    }

    return {
      success: true,
      code: 200,
      message: "Like encontrado com sucesso.",
      data: like,
    };
  }

  public async create(likeDTO: CreateLikesDTO): Promise<ResponseDTO> {
    const newLike = new Like(likeDTO.tweetId, likeDTO.userId);

    const createdLike = await repository.like.create({
      data: {
        userId: newLike.userId,
        tweetId: newLike.tweetId,
      },
    });

    return {
      success: true,
      code: 201,
      message: "Like criado com sucesso",
      data: createdLike,
    };
  }

  public async delete(id: string, userId: string, tweetId: string): Promise<ResponseDTO> {
    const like = await repository.like.findUnique({
      where: { id, userId, tweetId },
    });

    if (!like) {
      throw new Error("Like não encontrado");
    }

    const deletedLike = await repository.like.delete({
      where: {
        id, userId, tweetId
      },
    });

    return {
      success: true,
      code: 200,
      message: "Like removido com sucesso.",
      data: deletedLike,
    };
  }
}

