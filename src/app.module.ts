import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [RoomModule, MessageModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
