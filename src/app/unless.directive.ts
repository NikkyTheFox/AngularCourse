import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless( condition: boolean){ // a method to be executed each time input changes!
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef); // when condition is false a template will be rendered
    }
    else{
      this.vcRef.clear(); // when condition if true nothing will be rendered
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
