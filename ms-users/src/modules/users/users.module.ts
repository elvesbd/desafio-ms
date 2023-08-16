import { Module } from '@nestjs/common';
import { CreateUserController } from './controllers/create';
import { CreateUserService } from './services/create';
import { MongoUsersRepositoryService } from '../shared/Infra/database/mongo/repository/mongo-users-repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserModel,
  userSchema,
} from '../shared/Infra/database/mongo/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: userSchema }]),
  ],
  controllers: [CreateUserController],
  providers: [
    CreateUserService,
    {
      provide: 'USERS_REPOSITORY',
      useClass: MongoUsersRepositoryService,
    },
  ],
})
export class UsersModule {}
