import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {CssVars} from '../types';

@Directive({
  selector: '[css-vars]'
})
export class CssVarsDirective implements OnInit {

  @Input('css-vars') cssVars: CssVars;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (!this.cssVars) return;
    Object.keys(this.cssVars).forEach(key => {
      this.el.nativeElement.style.setProperty(key, this.cssVars[key]);
    });
  }

}
