import { IUser } from "@entities/user.entity";

export interface IUserDataSource {
  create(user: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
}
