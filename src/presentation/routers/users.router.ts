import express, { Request, Response } from 'express';
import { ICreateUserUseCase, IGetAllUsersUseCase } from 'src/domain/interfaces/use-cases/user.usecases';
import { UserController } from '../controllers/users.controller';

const usersRouter = express.Router();

export default function UserRouter(
  createUserUseCase: ICreateUserUseCase,
  getAllUsersUseCase: IGetAllUsersUseCase
) {
  const userController = new UserController(
      getAllUsersUseCase,
      createUserUseCase
    );

  usersRouter.get('/', async (req: Request, res: Response) => {
    return await userController.getAll(req, res);
  });

  usersRouter.post('/', async (req: Request, res: Response) => {
    return await userController.create(req, res);
  });

  return usersRouter;
}
