import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
  HostBinding,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[mirror]',
})
export class MirrowDirective implements OnInit {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    console.log(this.element);
    this.mirrorTabs();
  }

  private mirrorTabs(): void {
    this.renderer2.setStyle(
      this.element.nativeElement.childNodes[1].childNodes[0],
      'flex-direction',
      'row-reverse'
    );
  }
}
