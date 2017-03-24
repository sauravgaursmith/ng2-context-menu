import {Directive, Input} from '@angular/core';
import {ContextMenuDataService} from "../service/context-menu-data.service";

@Directive({
  selector: '[context-menu]',
  host: {'(contextmenu)': 'rightClick($event)'}
})
export class ContextMenuDirective {
  @Input('context-menu') information: any;

  constructor(private ContextMenuDataService: ContextMenuDataService) {

  }

  rightClick(event: MouseEvent) {
    event.preventDefault();
    document.getElementById('context-menu-container').style.display = 'block';

    let actionData = {
      information: this.information || null,
      mouseLocation: {
        left: event.clientX,
        top: event.clientY
      },
      targetElementInformation: event.target
    };

    this.ContextMenuDataService.actionData.next(actionData);
  }
}
