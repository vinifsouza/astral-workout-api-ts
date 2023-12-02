import { IUser } from "../../entities/user.entity";

export interface IGetAllUsersUseCase {
  execute(): Promise<IUser[]>;
}

export interface ICreateUserUseCase {
  execute(user: IUser): Promise<IUser>;
}
