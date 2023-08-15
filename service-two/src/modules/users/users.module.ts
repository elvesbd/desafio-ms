import { Module } from '@nestjs/common';
import { CreateUserController } from './Controllers/create';
import { CreateUserService } from './services/create';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService],
})
export class UsersModule {}
