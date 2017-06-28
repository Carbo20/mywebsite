import { Injectable } from '@angular/core';
import { Skill, SkillType } from './skills.model';


@Injectable()
export class SkillsService {
    langages: Skill[];
    frameworks: Skill[];

    constructor() {
        this.langages = [
            new Skill('C#(asp.net & Unity)',4,SkillType.langages,'Some detail about'),
            new Skill('JavaScript & TypeScript',5,SkillType.langages),
            new Skill('C/C++',4,SkillType.langages),
            new Skill('Java',3,SkillType.langages),
            new Skill('MathLab',3,SkillType.langages)
        ]
        this.frameworks = [
            new Skill('AngularJS & Angular 4',4,SkillType.framework,'Some detail about'),
            new Skill('Cordova',5,SkillType.framework),
            new Skill('Ionic 1&2',4,SkillType.framework),
            new Skill('OpenCV',3,SkillType.framework)
        ]
    }

    getSkills(type: SkillType){
        if(type == SkillType.framework){
            return this.frameworks.slice();
        }
        else if(type == SkillType.langages){
            return this.langages.slice();
        }
    }

}