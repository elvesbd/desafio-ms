import { Module } from '@nestjs/common';
import { KafkaMessageBrokerService } from '../shared/infra/brokers';
import { CreateUsersController } from './controllers/create';
import { CreateUsersService } from './services/create';

@Module({
  imports: [],
  controllers: [CreateUsersController],
  providers: [
    CreateUsersService,
    {
      provide: 'MESSAGE_BROKER',
      useClass: KafkaMessageBrokerService,
    },
  ],
})
export class UsersModule {}
