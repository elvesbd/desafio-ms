import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [UsersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
