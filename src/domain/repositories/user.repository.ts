import { IUserDataSource } from "@data/interfaces/data-sources/user.data-source";
import { IUser } from "@entities/user.entity";
import { IUserRepository } from "@interfaces/repositories/user.repository";

export class UserRepository implements IUserRepository {
  userDataSource: IUserDataSource;

  constructor(userDataSource: IUserDataSource) {
    this.userDataSource = userDataSource;
  }

  async create(user: IUser): Promise<IUser> {
    return this.userDataSource.create(user);
  }

  async getAll(): Promise<IUser[]> {
    return this.userDataSource.getAll();
  }
}
