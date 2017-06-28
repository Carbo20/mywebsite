export enum SkillType{
    langages = 0,
    framework = 1,
    fieldOfStudy = 2,
    miscellaneous = 3,
    lenght = 4
}

export class Skill{
    public name: string;
    public note: number;
    public detail?: string;
    public showDetail: boolean;
    public type: SkillType;

    constructor(name: string, note: number, type: SkillType, detail?: string ){
        this.name = name;
        this.note = note;
        this.type = type;
        detail ? this.detail = detail : this.detail = '';
        this.showDetail = false;
    }
}