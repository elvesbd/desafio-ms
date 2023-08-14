import { Injectable } from '@nestjs/common';
import { ConsumerService } from 'src/modules/shared/infra/brokers/kafka/consumer.service';

@Injectable()
export class CreateUsersService {
  constructor(private readonly consumerService: ConsumerService) {}

  async execute(createUserDto: any): Promise<void> {
    // salvar no banco de dados
  }
}
