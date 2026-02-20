export class CreateEventDto {
    readonly eventTitle: string;
    readonly eventDescription: string;
    readonly eventDate: Date;
    readonly eventLocation: string;
    readonly eventImageUrl: string;
    readonly eventUrl: string;  
}   