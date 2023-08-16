import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import { UsersRepository } from '../../repository';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    await this.usersRepository.create(createUserDto);
  }
}
