import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[bold]',
})
export class BoldDirective implements OnInit {
  private color: string = 'blue';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    this.color = "green";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('red');
  }

  @HostBinding('style.background') get getFontWeight() {
    return this.color;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'color', val);
  }
}
