import { IUser } from "../../entities/user.entity";

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
}
