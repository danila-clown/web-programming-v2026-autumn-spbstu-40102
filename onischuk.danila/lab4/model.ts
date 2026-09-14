export class Event {
    public id: number;
    public title: string;
    public participants: string[];
    public date: Date;

    constructor(id: number, title: string, participants: string[], date: Date) {
        this.id = id;
        this.title = title;
        this.participants = participants;
        this.date = date;
    }

    public addParticipant(name: string): void {
        this.participants.push(name)
    }

    public removeParticipant(name: string): void {
        const indexName: number = this.participants.indexOf(name);
        
        if (indexName !== -1) {
            this.participants.splice(indexName, 1)
        }
    }

    get participantCount(): number {
        return this.participants.length
    }
}
