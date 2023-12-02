import { IUser } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/repositories/user.repository";

export class UserRepository implements IUserRepository {
  private users: IUser[] = [];

  async create(user: IUser): Promise<IUser> {
    this.users.push(user);
    return user;
  }

  async getAll(): Promise<IUser[]> {
    return this.users;
  }
}
