import { IUserDataSource } from "@models/user.model";
import { IUser } from "@entities/user.entity";

export interface IUserRepository {
  userDataSource: IUserDataSource;
  create(user: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
}
