import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../../services/create';
import { CreateUserDto } from '../../dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
