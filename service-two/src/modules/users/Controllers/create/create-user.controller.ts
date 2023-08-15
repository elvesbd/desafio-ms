import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from 'src/modules/users/dto';
import { CreateUsersService } from 'src/modules/users/services/create';

@Controller()
export class CreateUserController {
  constructor(private readonly createUserService: CreateUsersService) {}

  @EventPattern('create_user')
  Create(@Payload(ValidationPipe) data: CreateUserDto) {
    this.createUserService.execute(data);
  }
}
