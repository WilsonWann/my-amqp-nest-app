import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ProducerService } from './queues/producer.file';
import { ConsumerService } from './queues/consumer.file';
import { QueueModule } from './queues/queue.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mini-db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    EmailModule,
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService],
})
export class AppModule {}
