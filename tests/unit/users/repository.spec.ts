import { IUser } from '@entities/user.entity';
import { IUserRepository } from '@interfaces/repositories/user.repository';
import { IUserDataSource } from '@data/interfaces/data-sources/user.data-source';
import { UserRepository } from '@repositories/user.repository';

class MockUserDataSource implements IUserDataSource {
  create(user: IUser): Promise<IUser> {
      throw new Error("Method not implemented.");
  }
  getAll(): Promise<IUser[]> {
      throw new Error("Method not implemented.");
  }
}

describe('Users', () => {
  let mockUserDataSource: IUserDataSource;
  let userRepository: IUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockUserDataSource = new MockUserDataSource()
    userRepository = new UserRepository(mockUserDataSource)
  })

  describe('getAllUsers', () => {
    it("Get all users", async () => {
      const expectedResult = [
        {
          id: 1,
          name: "Smith",
          password: "John",
          email: "john@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ] satisfies IUser[];

      jest.spyOn(mockUserDataSource, "getAll").mockImplementation(() => Promise.resolve(expectedResult))
      const result = await userRepository.getAll();
      expect(result).toBe(expectedResult)
    });
  });

  describe("createContact", () => {
    test("should return input data", async () => {
      const inputData =  {
        id: 1,
        name: "Smith",
        password: "John",
        email: "john@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      } satisfies IUser;

      jest.spyOn(mockUserDataSource, "create").mockImplementation(() => Promise.resolve(inputData))
      const result = await userRepository.create(inputData);
      expect(result).toBe(inputData)
    });
  })
});
