export class Experience{
    public name: string;
    public compagny : string;
    public postDescription: string;
    public date: Date;

    constructor(name: string, compagny: string, postDescription: string, date: Date ){
        this.name = name;
        this.compagny = compagny;
        this.postDescription = postDescription;
        this.date = date;
    }
}