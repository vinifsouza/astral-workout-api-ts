import { IUser } from '@entities/user.entity';
import { IUserRepository } from '@interfaces/repositories/user.repository';
import { CreateUserUseCase, GetAllUsersUseCase } from '@src/domain/use-cases/user.use-case';

describe('Users', () => {
  class MockUserRepository implements IUserRepository {
    create(user: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
  }

  let mockUserRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserRepository = new MockUserRepository()
  })

  describe('GetAllUsersUseCase', () => {
    it("Get all users", async () => {
      const ExpectedResult: IUser[] = [
        {
          id: 1,
          name: "Smith",
          password: "John",
          email: "john@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ];

      jest.spyOn(mockUserRepository, "getAll").mockImplementation(() => Promise.resolve(ExpectedResult))
        const getAllContactsUse = new GetAllUsersUseCase(mockUserRepository)
        const result = await getAllContactsUse.execute();
        expect(result).toStrictEqual(ExpectedResult)
    });
  });

  describe('CreateUserUseCase', () => {
    it("Create a user", async () => {
      const ExpectedResult = {
        id: 1,
        name: "Smith",
        password: "John",
        email: "john@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      } satisfies IUser;

      jest.spyOn(mockUserRepository, "create").mockImplementation(() => Promise.resolve(ExpectedResult))
        const createUserUseCase = new CreateUserUseCase(mockUserRepository)
        const result = await createUserUseCase.execute(ExpectedResult);
        expect(result).toStrictEqual(ExpectedResult)
    });
  });
});
