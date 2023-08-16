import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users';
import { SharedModule } from './modules/shared';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    SharedModule,
  ],
})
export class AppModule {}
