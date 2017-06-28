import { Skill, SkillType } from './skills.model';
import { SkillsService } from './skills.service';
import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group, Input } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('hoverState',[
      state('normal', style({
        cursor: 'default'
      })),
      state('hover', style({
        cursor: 'pointer'
      })),
      transition('normal => hover', animate(0)),
      transition('hover => normal', animate(0))
    ]),
    trigger('animateList',[
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(700, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(40px)',
            opacity: 1,
            offset: 0.6
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
        ]),
        transition('* => void', [
          group([
            animate(300, style({
          })),
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
          ])
        ])
    ])
  ]
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  
  skillHoverState = 'normal'
  skillPage = SkillType.langages;
  nextButtonDisabled = false;
  previousButtonDisabled = true;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills(SkillType.langages);
  }

  onSkillClick(skill){
    this.skills[this.skills.indexOf(skill)].showDetail = !this.skills[this.skills.indexOf(skill)].showDetail;
  }


  onHover(){
      this.skillHoverState = 'hover';
      console.log("hover");
  }

  onOut(){
      this.skillHoverState = 'normal';
  }

  onSkillsChange(pageTurn: number){
     this.skillPage += pageTurn;
     if(this.skillPage == 0) this.previousButtonDisabled = true;
     else if(this.skillPage == SkillType.lenght - 1) this.nextButtonDisabled = true;
     else{
        this.previousButtonDisabled = false;
        this.nextButtonDisabled = false;
     }
     this.deleteSkills(this.skills.length-1);
  }

  deleteSkills(i: number){
    setTimeout(()=>{
      this.skills.pop();
      if(i>0){
        this.deleteSkills(i-1);
      }
      if(this.skills.length==0){
        setTimeout(()=>{
          this.callNewSkills();
        },450);
      }
    },200);
  }

  callNewSkills(){
    var j = 0;
    var tempSkills: Skill[];
    tempSkills = this.skillsService.getSkills(this.skillPage);
    for(var i: number =0;i<tempSkills.length;i++){
     setTimeout(()=>{
      this.skills.push(tempSkills[j]);
      j++;
     },i*200); 
    }

  }

}
