import { IUser } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/repositories/user.repository";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(user: IUser): Promise<IUser> {
    return this.userRepository.create(user);
  }
}

export class GetAllUsersUseCase {
  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.getAll();
  }
}
