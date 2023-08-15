import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';

@Injectable()
export class CreateUsersService {
  // constructor() {}

  async execute(CreateUserDto: CreateUserDto) {
    console.log(CreateUserDto);
    console.log(typeof CreateUserDto);
  }
}
