import { Controller, Get, Post, Put, Delete, Param , Body} from '@nestjs/common';
import { EventsService } from './events.service';
import {Event} from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {

     constructor(private readonly eventService: EventsService) {}

    @Get()
    async findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
        async findOne(@Param('id') id: string): Promise<Event | null> {
            return this.eventService.findOne(parseInt(id));
        }
    
        @Post()
        async create(@Body() createEventDto: CreateEventDto) {
        return this.eventService.create(createEventDto);
        }
    
        @Put(':id')
        async update(@Body() updateEventDto: CreateEventDto, @Param('id') id: string): Promise<Event | null> {
            return this.eventService.update(parseInt(id), updateEventDto);
        }       
    
        @Delete(':id')
        async delete(@Param('id') id: string): Promise<
        Event | null > {
            return this.eventService.delete(parseInt(id));   
        }   
}
