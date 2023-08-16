import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionFilter } from './modules/shared/exceptions/rpc-exception-filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,

      options: {
        client: {
          brokers: ['kafka:9092'],
        },
        consumer: {
          groupId: 'user-consumer',
        },
      },
    },
  );
  await app.listen();
}

bootstrap();
