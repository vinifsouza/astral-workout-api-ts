import { Request, Response } from 'express';

import { ICreateUserUseCase, IGetAllUsersUseCase } from "src/domain/interfaces/use-cases/user.usecases";
import { IUser } from '../../domain/entities/user.entity';

export class UserController {
  constructor(
    private readonly getAllUsersUseCase: IGetAllUsersUseCase,
    private readonly createUserUseCase: ICreateUserUseCase
    ) {}

  async create(request: Request, response: Response) {
    const user: IUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      const createdUser = await this.createUserUseCase.execute(user);

      return response.json(createdUser);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const users = await this.getAllUsersUseCase.execute();

      return response.json(users);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
