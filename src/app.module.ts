import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/item.entity';
import { ItemsModule } from './items/items.module';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { Event } from './events/event.entity';
import { EventsModule } from './events/events.module';



@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'uat-ieg.sicl.lk',
      port: 3306,
      username: 'running_events_db',
      password: 'ErPpJXkc3xM46t2e',
      database: 'running_events_db',
     entities: [Item, Event],
      synchronize: true,
    }),
     TypeOrmModule.forFeature([Item]),
      ItemsModule,
      TypeOrmModule.forFeature([Event]),
      EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
