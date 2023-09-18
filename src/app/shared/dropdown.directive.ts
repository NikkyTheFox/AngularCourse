import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleDropdown() {
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');

    if (dropdownMenu) {
      if (dropdownMenu.classList.contains('show')) {
        this.renderer.removeClass(dropdownMenu, 'show');
      } else {
        this.renderer.addClass(dropdownMenu, 'show');
      }
    }
  }
}
