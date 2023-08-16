import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
