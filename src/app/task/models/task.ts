export class Task{
    id: number;
    title: string;
    comment: string;
    enabled: boolean;

    constructor(id: number, title: string, comment: string, enabled: boolean){
        this.id = id;
        this.title = title;
        this.comment = comment;
        this.enabled = enabled;

    }
}