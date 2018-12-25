import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private viewHas: Boolean = false;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {}

  @Input() set appUnless(condition: boolean) {
      if (!this.viewHas && !condition) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewHas = true;
      } else if (this.viewHas && condition) {
        this.viewContainerRef.clear();
        this.viewHas = false;
      }
  }
}
