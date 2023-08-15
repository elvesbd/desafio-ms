import { Module } from '@nestjs/common';
import { CreateUserController } from './Controllers/create';
import { CreateUsersService } from './services/create';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUsersService],
})
export class UsersModule {}
