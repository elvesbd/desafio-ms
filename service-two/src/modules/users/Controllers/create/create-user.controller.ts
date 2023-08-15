import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from 'src/modules/users/dto';
import { CreateUserService } from '../../services/create';

@Controller()
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @EventPattern('create_user')
  Create(@Payload(ValidationPipe) data: CreateUserDto) {
    this.createUserService.execute(data);
  }
}
