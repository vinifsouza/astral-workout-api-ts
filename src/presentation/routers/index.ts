import express from 'express'
import UserRouter from './users.router';
import { CreateUserUseCase, GetAllUsersUseCase } from '@use-cases/user.use-case';
import { UserRepository } from '@repositories/user.repository';

const router = express.Router();

const userRepository = new UserRepository();
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
})

export default router;
