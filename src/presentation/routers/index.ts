import express from 'express';
import UserRouter from './users.router';
import { CreateUserUseCase, GetAllUsersUseCase } from '@use-cases/user.use-case';
import { UserRepository } from '@repositories/user.repository';
import { UserDataSource } from '@data-sources/users.data-source';

const router = express.Router();

const userDataSource = new UserDataSource();
const userRepository = new UserRepository(userDataSource);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const createUserUseCase = new CreateUserUseCase(userRepository);

// users
router.use('/users', UserRouter(getAllUsersUseCase, createUserUseCase));

// app
router.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

router.all('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

export default router;
