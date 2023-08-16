import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UserResponseDto } from '../../dto';
import { UsersRepository } from '../../repository';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return await this.usersRepository.create(createUserDto);
  }
}
