import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersRepository } from 'src/modules/users/repository';
import { CreateUserDto, UserResponseDto } from 'src/modules/users/dto';
import { User } from '../schemas';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class MongoUsersRepositoryService implements UsersRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(data: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userModel.create(data);
    await user.save();
    return UserMapper.toDTo(user);
  }
}
