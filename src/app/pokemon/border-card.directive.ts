import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  // standalone: true,
})
export class BorderCardDirective {

  private initialColor:string = '#f5f5f5';
  private defaulColor:string = '#009688';
  private defaulHeigh:number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaulHeigh);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaulColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}