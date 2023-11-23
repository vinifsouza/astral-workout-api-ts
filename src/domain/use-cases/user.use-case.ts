import { IUser } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/repositories/user.repository";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(user: IUser): Promise<IUser> {
    console.log('CreateUserUseCase');
    return this.userRepository.create(user);
  }
}

export class GetAllUsersUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(): Promise<IUser[]> {
    console.log('GetAllUsersUseCase');
    return this.userRepository.getAll();
  }
}
