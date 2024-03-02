import { repository } from "../db/prisma.connection";
import { ResponseDTO } from "../dtos/response.dto";
import { CreateLikesDTO } from "../dtos/likes.dto";
import { Like } from "../models/like.model";

export class LikeService {
    public async create(likeDTO: CreateLikesDTO): Promise<ResponseDTO> {
        const newLike = new Like(
            likeDTO.tweetId,
            likeDTO.userId
        )

        const createdLike = await repository.like.create({
            data: {
                userId: newLike.userId,
                tweetId: newLike.tweetId
            }
        })

        return {
            success: true,
            code: 201,
            message: 'Like criado com sucesso',
            data: createdLike
        }
    }

    public async delete(id: string): Promise<ResponseDTO> {
        const like = await repository.like.findUnique({
            where: { id }
        })

        if (!like) {
            throw new Error('Like não encontrado')
        }

        const deletedLike = await repository.like.delete({
            where: {
                id
            }
        })

        return {
            success: true,
            code: 200,
            message: 'Like removido com sucesso.',
            data: deletedLike
        }
    }
}

