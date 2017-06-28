import { Injectable } from '@angular/core';
import { Skill, SkillType } from './skills.model';


@Injectable()
export class SkillsService {
    langages: Skill[];
    frameworks: Skill[];
    fieldOfStudies: Skill[];
    miscellaneous: Skill[];

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
        ],
        this.fieldOfStudies = [
            new Skill('Programamation graphique',4,SkillType.fieldOfStudy,'Some detail about'),
            new Skill('Gestion de projet',4,SkillType.fieldOfStudy,'Some detail about'),
            new Skill('Algorithmie',4,SkillType.fieldOfStudy,'Some detail about')
        ],
        this.miscellaneous = [
            new Skill('Visual Studio',4,SkillType.miscellaneous,'Some detail about'),
            new Skill('Git',4,SkillType.miscellaneous,'Some detail about'),
            new Skill('TFS',4,SkillType.miscellaneous,'Some detail about'),
            new Skill('Microsoft Azure',4,SkillType.miscellaneous,'Some detail about'),
            new Skill('Photoshop',4,SkillType.miscellaneous,'Some detail about'),
            new Skill('Agile & Scrum',4,SkillType.miscellaneous,'Some detail about')
        ]
    }

    getSkills(type: SkillType){
        if(type == SkillType.framework){
            return this.frameworks.slice();
        }
        else if(type == SkillType.langages){
            return this.langages.slice();
        }
        else if(type == SkillType.fieldOfStudy){
            return this.fieldOfStudies.slice();
        }
        else if(type == SkillType.miscellaneous){
            return this.miscellaneous.slice();
        }
    }

}