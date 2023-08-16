import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserService } from '../../services/create';
import { CreateUserDto } from 'src/modules/users/dto';
import { PatternType } from '../../enum';

@Controller()
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @EventPattern(PatternType.CREATE_USER)
  Create(@Payload(ValidationPipe) data: CreateUserDto) {
    this.createUserService.execute(data);
  }
}