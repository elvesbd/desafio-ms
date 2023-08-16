import { Test, TestingModule } from '@nestjs/testing';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto';
import { PatternType } from '../../enum';

describe('CreateUserService', () => {
  let sut: CreateUserService;
  let userClient: ClientKafka;

  beforeEach(async () => {
    jest.clearAllMocks();

    const UserClientProvider = {
      provide: 'USER_SERVICE',
      useValue: {
        emit: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserService, UserClientProvider],
    }).compile();

    sut = module.get<CreateUserService>(CreateUserService);
    userClient = module.get<ClientKafka>('USER_SERVICE');
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(userClient).toBeDefined();
  });

  describe('execute()', () => {
    const createUserDto: CreateUserDto = {
      name: 'Kelly Slater',
      email: 'kelly@test.com',
      phone: '85999567899',
      age: 29,
    };

    it('should be called userClient.emit with correct values', async () => {
      await sut.execute(createUserDto);
      expect(userClient.emit).toHaveBeenCalledTimes(1);
      expect(userClient.emit).toHaveBeenCalledWith(
        PatternType.CREATE_USER,
        createUserDto,
      );
    });
  });
});
