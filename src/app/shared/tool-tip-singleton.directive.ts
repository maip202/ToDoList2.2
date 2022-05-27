import { ToolTipDirective } from './tool-tip.directive';
import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants: true})
  elementWithTooltips: QueryList<ToolTipSingletonDirective> 

  constructor() { }

  ngAfterViewInit(): void {
    
  }

}

