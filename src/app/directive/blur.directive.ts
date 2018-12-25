import { element } from 'protractor';
import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective {

  constructor(private elementRef: ElementRef) {
      console.log('BlurDirective constructor==');
  }

  @Input() set appBlur(value: Number) {
    this.elementRef.nativeElement.style = 'filter:blur(' + value + 'px)';
  }
}
