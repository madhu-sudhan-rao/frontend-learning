import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(
    private el: ElementRef
  ) { 
    this.el.nativeElement.style.padding = '5px'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || this.defaultColor || 'orange');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.borderRadius = '5px';
  }

}
