import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from 'src/modules/users/dto';
import { MessageBroker } from 'src/modules/users/interfaces';

@Injectable()
export class KafkaMessageBrokerService implements MessageBroker {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userClient: ClientKafka,
  ) {}

  publish(topic: string, payload: CreateUserDto) {
    this.userClient.emit(topic, payload);
  }
}
