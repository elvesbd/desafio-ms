import { Injectable } from '@nestjs/common';
import { ConsumerService } from 'src/modules/shared/infra/brokers/kafka/consumer.service';

@Injectable()
export class CreateUsersService {
  constructor(private readonly producerService: ConsumerService) {}

  async execute(): Promise<void> {}
}
