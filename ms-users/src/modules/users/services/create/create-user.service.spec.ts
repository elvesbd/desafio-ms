import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto';
import { UsersRepository } from '../../repository';
import { UserDataBuilder } from '../../__mocks__';

describe('CreateUserService', () => {
  let sut: CreateUserService;
  let usersRepository: UsersRepository;

  const user = UserDataBuilder.aUser().build();

  beforeEach(async () => {
    jest.clearAllMocks();

    const UsersRepositoryProvider = {
      provide: 'USERS_REPOSITORY',
      useValue: {
        create: jest.fn().mockResolvedValue(user),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserService, UsersRepositoryProvider],
    }).compile();

    sut = module.get<CreateUserService>(CreateUserService);
    usersRepository = module.get<UsersRepository>('USERS_REPOSITORY');
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('execute()', () => {
    const createsUserDto: CreateUserDto = {
      name: 'John Doe',
      email: 'john@mail.com',
      phone: '85999481515',
      age: 40,
    };

    it('should be called usersRepository.create with correct values', async () => {
      await sut.execute(createsUserDto);
      expect(usersRepository.create).toHaveBeenCalledTimes(1);
      expect(usersRepository.create).toHaveBeenCalledWith(createsUserDto);
    });

    it('should be return an user created on success', async () => {
      const result = await sut.execute(createsUserDto);
      expect(result).toStrictEqual(user);
    });
  });
});
