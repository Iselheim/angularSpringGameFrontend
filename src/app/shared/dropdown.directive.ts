import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    this.changeElementClass();
  }

  private changeElementClass() {
    let div: HTMLDivElement;
    for (let child of this.elementRef.nativeElement.children) {
      if (child instanceof HTMLDivElement) {
        div = child;
      }
    }
    if (this.isOpen) {
      this.renderer.addClass(div, 'show');
    } else {
      this.renderer.removeClass(div, 'show');
    }
  }

}
