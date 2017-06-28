import { Skill } from './../../cv/skills/skills.model';
import { SkillsService } from './../../cv/skills/skills.service';
import { Directive, ElementRef, OnInit, Input, Renderer2, HostListener } from '@angular/core';


@Directive({ selector: '[notationFont]' })
export class NotationFontDirective implements OnInit {
    
    @Input('notationFont') note: number;
    @Input() index: number;;

    skills: Skill[];

    constructor(private elementRef: ElementRef,private renderer: Renderer2) { 
    }

    ngOnInit(){
        if(this.note > this.index) this.renderer.addClass(this.elementRef.nativeElement,'fa-circle');
        else this.renderer.addClass(this.elementRef.nativeElement,'fa-circle-o');
    }
}

@Directive({
  selector: '[highlightSkill]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight("3px");
    this.el.nativeElement.style.cursor = "pointer";
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("1px");
    this.el.nativeElement.style.cursor = "default";
  }
 
  private highlight(size: string) {
    this.el.nativeElement.style.borderWidth = size;
  }
}