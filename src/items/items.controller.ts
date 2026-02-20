import { Controller, Get, Post, Put , Delete, Body,Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
// import { Item } from './interfaces/item.interface';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll():Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Item | null> {
        return this.itemsService.findOne(parseInt(id));
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise<Item | null> {
        return this.itemsService.update(parseInt(id), updateItemDto);
    }       

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Item | null > {
        return this.itemsService.delete(parseInt(id));   
    }   
}
