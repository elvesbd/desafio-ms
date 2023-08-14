import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { MessageBroker } from '../../interfaces/message-broker.interface';

@Injectable()
export class CreateUsersService {
  constructor(private readonly messageBroker: MessageBroker) {}

  async execute(createUserDto: CreateUserDto): Promise<void> {
    await this.messageBroker.publishToTopic('order-topic', createUserDto);
  }
}
