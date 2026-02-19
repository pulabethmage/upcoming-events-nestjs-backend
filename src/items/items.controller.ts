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

    //   @Get(':id/:id2')
    // findOne(@Param('id') id: string, @Param('id2') id2: string): string {
    //     return `Item 1 #${id} ,item 2 # ${id2}`;
    // }

    // @Post()
    // create(@Body() createItemDto: CreateItemDto): string {
    //     return `This action adds a new item with name: ${createItemDto.name}`;
    // }

    @Post()
    async create(@Body() createItemDto: any) {
    return this.itemsService.create(createItemDto);
    }



    @Put(':id')
    async update(@Body() updateItemDto: any, @Param('id') id: string): Promise<Item | null> {
        return this.itemsService.update(parseInt(id), updateItemDto);
    }       

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.itemsService.delete(parseInt(id));   
    }   
}
