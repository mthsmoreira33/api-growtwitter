import { Request, Response } from "express";
import { LikeService } from "../services/like.service";
import { CreateLikesDTO } from "../dtos/likes.dto";

const likeService = new LikeService();

export class LikeController {

  public async store(request: Request, response: Response) {
    try {
      const { userId, tweetId } = request.body;

      if (!userId || !tweetId) {
        return response.status(400).json({
          success: false,
          code: 400,
          message: "Preencha todos os campos obrigatórios.",
        });
      }

      const like: CreateLikesDTO = { userId, tweetId };

      const result = await likeService.create(like);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: "Erro ao criar usuário.",
      });
    }
  }
  public async show(request: Request, response: Response) {
    try {
      const { id, userId, tweetId } = request.params;

      const result = await likeService.findById(id, userId, tweetId);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: "Erro ao buscar like.",
      });
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      const { id, userId, tweetId } = request.params;

      const result = await likeService.delete(id, userId, tweetId);

      response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: "Erro ao excluir like.",
      });
    }
  }
}
