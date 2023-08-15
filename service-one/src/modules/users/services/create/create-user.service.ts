import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import { ClientKafka } from '@nestjs/microservices';
import { PatternType } from '../../enum';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userClient: ClientKafka,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    this.userClient.emit(PatternType.CREATE_USER, createUserDto);
  }
}
