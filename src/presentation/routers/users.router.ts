import express, { Request, Response } from 'express';
import { UserController } from '../controllers/users.controller';
import { CreateUserUseCase, GetAllUsersUseCase } from '../../domain/use-cases/user.use-case';

const usersRouter = express.Router();

export default function UserRouter(
  getAllUsersUseCase: GetAllUsersUseCase,
  createUserUseCase: CreateUserUseCase
) {
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
