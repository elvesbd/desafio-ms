import { Injectable } from '@nestjs/common';
import { MessageBroker } from '../../interfaces';
import { CreateUserDto } from '../../dto';

@Injectable()
export class CreateUsersService {
  constructor(private readonly messageBroker: MessageBroker) {}

  async execute(createUserDto: CreateUserDto): Promise<void> {
    await this.messageBroker.publishToTopic('user-topic', createUserDto);
  }
}
