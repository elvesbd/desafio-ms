import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel, UserDocument } from '../schemas';
import { User } from 'src/modules/users/entity/user';
import { UsersRepository } from 'src/modules/users/repository';

@Injectable()
export class MongoUsersRepositoryService implements UsersRepository {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<User> {
    const newUser = await this.userModel.create(user);
    return newUser.save();
  }
}
