import {Directive,ElementRef,HostListener,Renderer,HostBinding} from '@angular/core'

@Directive({selector:'[bacDecorator]'})

export class BackDecorator{
          constructor(private e:ElementRef, private renderer: Renderer){
            // this.e.nativeElement.style.background='yellow'; applies default
          }
    @HostBinding('style.border') border: string;

    @HostListener('mouseover') onclick1(){
        this.ChangeBgColor('blue');
        this.border = '0.1px solid blue';
    }
    @HostListener('mouseleave') onclickleve(){
        this.ChangeBgColor('black');
        this.border = '0px';
    }
    
    ChangeBgColor(color: string) {
        this.renderer.setElementStyle(this.e.nativeElement, 'color', color);
    }
}