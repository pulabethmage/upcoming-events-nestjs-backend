import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    eventTitle: string;

    @Column()
    eventDescription: string;

    @Column()
    eventDate: Date;

    @Column()
    eventLocation: string;

    @Column()
    eventImageUrl: string;

    @Column()
    eventUrl: string;

}