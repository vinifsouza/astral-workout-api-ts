import { IUser } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/repositories/user.repository";
import { ICreateUserUseCase, IGetAllUsersUseCase } from "@interfaces/use-cases/user.usecases";

export class CreateUserUseCase implements ICreateUserUseCase {
  userRepository: IUserRepository
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: IUser): Promise<IUser> {
    return this.userRepository.create(user);
  }
}

export class GetAllUsersUseCase implements IGetAllUsersUseCase {
  userRepository: IUserRepository
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<IUser[]> {
    return this.userRepository.getAll();
  }
}
