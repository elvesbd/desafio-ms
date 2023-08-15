import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../../dto';
import { CreateUserService } from './create-user.service';

describe('CreateUserService', () => {
  let sut: CreateUserService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserService],
    }).compile();

    sut = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('execute()', () => {
    const createUserDto: CreateUserDto = {
      name: 'Kelly Slater',
      email: 'kelly@test.com',
      phone: '85999567899',
      age: 29,
    };

    it('should be', async () => {});
  });
});
