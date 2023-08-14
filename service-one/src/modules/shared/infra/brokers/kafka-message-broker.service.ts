import { Injectable } from '@nestjs/common';
import { MessageBroker } from 'src/modules/users/interfaces';

@Injectable()
export class KafkaMessageBrokerService implements MessageBroker {
  constructor(private readonly t: any) {}

  publishToTopic(topic: string, payload: object): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
