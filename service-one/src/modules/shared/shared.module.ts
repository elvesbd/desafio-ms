import { Module } from '@nestjs/common';
import { KafkaMessageBrokerService } from './infra/brokers';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user',
            brokers: ['kafka: 9092'],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
  ],
  providers: [KafkaMessageBrokerService],
})
export class SharedModule {}
