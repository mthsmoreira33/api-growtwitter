import { repository } from "../db/prisma.connection";
import { ResponseDTO } from "../dtos/response.dto";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/users.dto";
import { User } from "../models/user.model";

export class UserService {
  public async findAll(): Promise<ResponseDTO> {
    const users = await repository.user.findMany();

    return {
      success: true,
      code: 200,
      message: "Usuários listados.",
      data: users,
    };
  }

  public async create(userDTO: CreateUserDTO): Promise<ResponseDTO> {
    const newUser = new User(
      userDTO.name,
      userDTO.email,
      userDTO.password,
      userDTO.username
    );

    const createdUser = await repository.user.create({
      data: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        username: newUser.username,
      },
    });

    return {
      success: true,
      code: 201,
      message: "Usuário criado com sucesso.",
    };
  }
  public async findById(id: string): Promise<ResponseDTO> {
    const user = await repository.user.findUnique({
      where: { id }
    })

    if (!user) {
        throw new Error("Usuário não encontrado")
    }

    return {
        success: true,
        code: 200,
        message: "Usuário encontrado com sucesso.",
        data: user
    }
  }

  public async update(userDTO: UpdateUserDTO): Promise<ResponseDTO> {
    const user = await repository.user.findUnique({
        where: { id: userDTO.id }
    })

    if (!user) {
        throw new Error("Usuário não encontrado")
    }

    const updatedUser = await repository.user.update({
        where: {
            id: userDTO.id
        },
        data: {
            name: userDTO.name,
            password: userDTO.password,
            username: userDTO.username
        }
    })

    return {
        success: true,
        code: 200,
        message: "Usuário atualizado com sucesso",
        data: updatedUser
    }
  }

  public async delete(id: string): Promise<ResponseDTO> {
    const user = await repository.user.findUnique({
        where: { id }
    })

    if (!user) {
        throw new Error("Usuário não encontrado")
    }

    const deletedUser = await repository.user.delete({
        where: { id }
    })

    return {
        success: true,
        code: 200,
        message: "Usuário removido com sucesso.",
        data: deletedUser
    }
  }
}
