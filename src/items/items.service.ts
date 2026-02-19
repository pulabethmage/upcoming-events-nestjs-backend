import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.itemsRepository.findOneBy({ id });
  }

  create(itemData: Partial<Item>): Promise<Item> {
    const item = this.itemsRepository.create(itemData);
    return this.itemsRepository.save(item);
  }

    async update(id: number, itemData: Partial<Item>): Promise<Item | null> {       
        const item = await this.itemsRepository.findOneBy({ id });
        if (!item) {
            return null;
        }
        Object.assign(item, itemData);
        return this.itemsRepository.save(item);
    }

    async delete(id: number): Promise<void> {
        await this.itemsRepository.delete(id);
    }   
}
