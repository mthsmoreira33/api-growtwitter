import { repository } from "../db/prisma.connection";
import { CreateFollowerDTO } from "../dtos/follower.dto";
import { ResponseDTO } from "../dtos/response.dto";
import { Follower } from "../models/follower.model";

export class FollowerService {
  public async create(followerDTO: CreateFollowerDTO): Promise<ResponseDTO> {
    const newFollower = new Follower(followerDTO.id, followerDTO.userId);

    const createdFollower = await repository.follower.create({
      data: {
        id: newFollower.id,
        userId: newFollower.userId,
      },
    });

    return {
      success: true,
      code: 201,
      message: "Follower criado com sucesso",
      data: createdFollower,
    };
  }

  public async findById(
    id: string,
    userId: string
  ): Promise<ResponseDTO> {
    const follower = await repository.follower.findUnique({
      where: { id, userId },
    });

    if (!id || !userId ) {
      throw new Error("Follower não encontrado");
    }

    return {
      success: true,
      code: 200,
      message: "Follower encontrado com sucesso.",
      data: follower,
    };
  }

  public async delete(id: string, userId: string): Promise<ResponseDTO> {
    const follower = await repository.follower.findUnique({
      where: { id, userId },
    });

    if (!follower) {
      throw new Error("Follower não encontrado");
    }

    const deletedFollower = await repository.follower.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
      code: 200,
      message: "Follower removido com sucesso.",
      data: deletedFollower,
    };
  }
}
