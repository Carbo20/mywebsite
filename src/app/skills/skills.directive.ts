import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';


@Directive({ selector: '[notationFont]' })
export class NotationFontDirective implements OnInit {
    
    @Input('notationFont') note: number;
    @Input() index: number;;

    constructor(private elementRef: ElementRef,private renderer: Renderer2) { 
    }

    ngOnInit(){
        if(this.note > this.index) this.renderer.addClass(this.elementRef.nativeElement,'fa-circle');
        else this.renderer.addClass(this.elementRef.nativeElement,'fa-circle-o');
        
    }

}