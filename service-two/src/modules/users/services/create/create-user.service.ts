import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';

@Injectable()
export class CreateUserService {
  // constructor() {}

  async execute(CreateUserDto: CreateUserDto) {
    console.log(CreateUserDto);
    console.log(typeof CreateUserDto);
  }
}
