import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import { ProducerService } from 'src/modules/shared/infra/brokers';

@Injectable()
export class CreateUsersService {
  constructor(private readonly producerService: ProducerService) {}

  async execute(createUserDto: CreateUserDto): Promise<void> {
    await this.producerService.produce({
      topic: 'create-user',
      messages: [
        {
          value: JSON.stringify(createUserDto),
        },
      ],
    });
  }
}
