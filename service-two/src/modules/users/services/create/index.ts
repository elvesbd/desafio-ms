import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/modules/shared/infra/brokers/kafka/consumer.service';

@Injectable()
export class CreateUsersService implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['create-user'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
        },
      },
    );
  }
}
