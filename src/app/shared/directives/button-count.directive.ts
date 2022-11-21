import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
  HostBinding,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { count } from 'rxjs';

@Directive({
  selector: '[count]',
})
export class CountDirective implements OnInit {
  private counter: number = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {}

  @HostListener('click') onMouseClick() {
    this.counter++;
    let text = this.renderer.createText(this.counter.toString());
    const countText = this.renderer.createElement('span');
    this.renderer.appendChild(countText, text);

    if (this.element.nativeElement.childNodes[2]) {
      this.renderer.removeChild(
        this.element.nativeElement,
        this.element.nativeElement.childNodes[
          this.element.nativeElement.childNodes.length - 1
        ]
      );
    }
    this.renderer.appendChild(this.element.nativeElement, countText);
  }
}
