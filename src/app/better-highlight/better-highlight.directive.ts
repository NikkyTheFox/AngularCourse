import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') config: { defaultColor: string, highlightColor: string } = {
    defaultColor: 'transparent',
    highlightColor: 'blue'
  };

  @HostBinding('style.backgroundColor') backgrounColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgrounColor = this.config.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgrounColor = this.config.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgrounColor = this.config.defaultColor;
  }

}
