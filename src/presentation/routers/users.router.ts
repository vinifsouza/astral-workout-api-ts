import express, { Request, Response } from 'express';
import { UserController } from '../controllers/users.controller';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserUseCase, GetAllUsersUseCase } from '../../domain/use-cases/user.use-case';

const usersRouter = express.Router();
const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);

export default function UserRouter() {
  const userController = new UserController(
      getAllUsersUseCase,
      createUserUseCase
    );

  usersRouter.get('/', async (req: Request, res: Response) => {
    return userController.getAll(req, res);
  });

  usersRouter.post('/', async (req: Request, res: Response) => {
    return userController.create(req, res);
  });

  return usersRouter;
}
