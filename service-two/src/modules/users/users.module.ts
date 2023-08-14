import { Module } from '@nestjs/common';
import { CreateUsersController } from './controllers/create';
import { CreateUsersService } from './services/create';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [CreateUsersController],
  providers: [CreateUsersService],
})
export class UsersModule {}
