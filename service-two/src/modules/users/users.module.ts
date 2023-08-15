import { Module } from '@nestjs/common';
import { CreateUsersService } from './services/create';
import { CreateUserController } from './Controllers/create';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUsersService],
})
export class UsersModule {}
