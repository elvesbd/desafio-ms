import { Module } from '@nestjs/common';
import { ConsumerService } from './infra/brokers/kafka/consumer.service';

@Module({
  providers: [ConsumerService],
  exports: [ConsumerService],
})
export class SharedModule {}
