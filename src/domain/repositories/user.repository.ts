import { IUser } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/repositories/user.repository";

export class UserRepository implements IUserRepository {
  async create(user: IUser) {
    console.log('UserRepository');
    return user;
  }

  async getAll() {
    console.log('UserRepository');
    return [];
  }
}
