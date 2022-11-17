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
  
  @Directive({
    selector: '[count]',
  })
  export class CountDirective implements OnInit {
    constructor(
      private element: ElementRef,
      private renderer2: Renderer2,
      private _viewContainer: ViewContainerRef
    ) {}
  
    public ngOnInit(): void {
    //   console.log(this._viewContainer);
    //   this.mirrorTabs();
    }
  
    // private mirrorTabs(): void {
    //   this.renderer2.setStyle(
    //     this.element.nativeElement.childNodes[1].childNodes[0],
    //     'flex-direction',
    //     'row-reverse'
    //   );
    // }
  }
  