import { IUser } from "@entities/user.entity";
import { IUserDataSource } from "@models/user.model";

export class UserDataSource implements IUserDataSource {
  async create(user: IUser): Promise<IUser> {
    return user;
  }

  async getAll(): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }
}
