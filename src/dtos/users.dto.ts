export interface CreateUserDTO {
    name: string
    email: string
    password: string
    username: string
}

export interface UpdateUserDTO {
    id: string
    email?: string
    name?: string
    password?: string
    username?: string
}
