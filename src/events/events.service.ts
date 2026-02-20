import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { Item } from 'src/items/interfaces/item.interface';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event | null> {
    return this.eventsRepository.findOneBy({ id });
  }

  create(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventsRepository.create(eventData);
    return this.eventsRepository.save(event);
  }

    async update(id: number, eventData: Partial<Event>): Promise<Event | null> {       
        const event = await this.eventsRepository.findOneBy({ id });
        if (!event) {
            return null;
        }
        Object.assign(event, eventData);
        return this.eventsRepository.save(event);
    }

    async delete(id: number): Promise<Event | null> {
        const event = await this.eventsRepository.findOneBy({ id });
        if (!event) {
            return null;
        }
        return this.eventsRepository.remove(event);
    }   
}
