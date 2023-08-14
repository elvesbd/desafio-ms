import { Inject, Injectable } from '@nestjs/common';
import { MessageBroker } from '../../interfaces';
import { CreateUserDto } from '../../dto';

@Injectable()
export class CreateUsersService {
  constructor(
    @Inject('MESSAGE_BROKER')
    private readonly messageBroker: MessageBroker,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<void> {
    await this.messageBroker.publish('create-user', createUserDto);
  }
}
