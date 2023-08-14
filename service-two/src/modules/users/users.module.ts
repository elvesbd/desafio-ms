import { Module } from '@nestjs/common';
import { CreateUsersService } from './services/create';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [CreateUsersService],
})
export class UsersModule {}
