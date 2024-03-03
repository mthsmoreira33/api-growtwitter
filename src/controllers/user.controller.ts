import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { CreateUserDTO } from '../dtos/users.dto';

const userService = new UserService();

export class UserController {
  public async index(request: Request, response: Response) {
    try {
      const users = await userService.findAll()

      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: 'Erro ao listar usuários.',
      })
    }
  }

  public async store(request: Request, response: Response) {
    try {
      const { name, email, password, username } = request.body

      if (!name || !email || !password || !username) {
        return response.status(400).json({
          success: false,
          code: 400,
          message: 'Preencha todos os campos obrigatórios.',
        })
      }

      const user: CreateUserDTO = { name, email, password, username }

      const result = await userService.create(user)
      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: 'Erro ao criar usuário.',
      })
    }
  }
  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params

      const result = await userService.findById(id)

      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: 'Erro ao buscar usuário.',
      })
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params
      const { name, username, password, email } = request.body

      const result = await userService.update({
        id,
        name,
        password,
        username,
        email
      })

      response.status(200).json(result)

    } catch (error) {
      return response.status(500).json({
        success: false,
        code: 500,
        message: 'Erro ao atualizar usuário.',
      })
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params

      const result = await userService.delete(id)

      response.status(200).json(result)
    } catch (error) {
      // tratamento de erro
      return response.status(500).json({
        success: false,
        code: 500,
        message: 'Erro ao excluir usuário.',
      })
    }
  }
}
