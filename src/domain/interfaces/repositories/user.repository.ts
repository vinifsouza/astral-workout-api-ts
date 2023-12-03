import { IUserDataSource } from "@data/interfaces/data-sources/user.data-source";
import { IUser } from "@entities/user.entity";

export interface IUserRepository {
  userDataSource: IUserDataSource;
  create(user: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
}
