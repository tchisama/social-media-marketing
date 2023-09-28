export interface Event {
    date: Date;
    content: string;
    note:string;
    platforms: ("Facebook"|"Instagram"|"Youtube")[];
    time: string;
}