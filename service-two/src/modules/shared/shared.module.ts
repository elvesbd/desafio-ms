import { Module } from '@nestjs/common';
import { ProducerService } from './infra/brokers';

@Module({
  providers: [ProducerService],
  exports: [ProducerService],
})
export class SharedModule {}
