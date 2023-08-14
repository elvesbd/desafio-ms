import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersService } from '../../services/create';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('users')
export class CreateUsersController {
  constructor(private readonly createUsersService: CreateUsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.createUsersService.execute(createUserDto);
  }
}
