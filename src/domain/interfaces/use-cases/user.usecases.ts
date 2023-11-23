import { User } from "../../entities/user.entity";

export interface IGetAllUsersUseCase {
  execute(): Promise<User[]>;
}

export interface ICreateUserUseCase {
  execute(user: User): Promise<User>;
}
