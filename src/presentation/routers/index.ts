import express from 'express'
import UserRouter from './users.router';
import { CreateUserUseCase, GetAllUsersUseCase } from '../../domain/use-cases/user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
router.use('/users', UserRouter(createUserUseCase, getAllUsersUseCase));

router.all('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
})

export default router;
