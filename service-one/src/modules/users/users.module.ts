import { Module } from '@nestjs/common';
import { CreateUserController } from './controllers/create';
import { CreateUserService } from './services/create';
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
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [CreateUserController],
  providers: [CreateUserService],
})
export class UsersModule {}
