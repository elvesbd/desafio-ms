import { Module } from '@nestjs/common';
import { KafkaMessageBrokerService } from './infra/brokers';

@Module({
  imports: [KafkaMessageBrokerService],
})
export class SharedModule {}
