import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUsersRepositoryService } from './Infra/database/mongo/repository/mongo-users-repository.service';
import {
  UserModel,
  UserSchema,
} from './Infra/database/mongo/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
        dbName: 'users',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [MongoUsersRepositoryService],
  exports: [MongoUsersRepositoryService],
})
export class SharedModule {}
