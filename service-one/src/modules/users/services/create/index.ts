import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class CreateUsersService {
  async execute(createUsersDto: CreateUserDto): Promise<void> {
    // Lógica para criar a ordem e publicar no Kafka
    //await this.kafkaService.publishToTopic('order-topic', createOrderDto);
  }
}
