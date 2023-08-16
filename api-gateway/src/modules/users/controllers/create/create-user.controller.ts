import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import { CreateUserService } from '../../services/create';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
