import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserService } from './services/create';
import { CreateUserController } from './controllers/create';
import { UserModel, userSchema } from '../shared/Infra/database/mongo/schemas';
import { MongoUsersRepositoryService } from '../shared/Infra/database/mongo/repository';

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
