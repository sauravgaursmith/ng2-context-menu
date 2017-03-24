import {Component, OnInit, Renderer} from '@angular/core';
import {ContextMenuDataService} from "./service/context-menu-data.service";

@Component({
  selector: 'ng2-context-menu',
  templateUrl: 'ng2-context-menu.component.html'
})
export class Ng2ContextMenuComponent implements OnInit {

  private mouseLocation: {left: number, top: number} = {left: 0, top: 0};
  private information: any;
  private targetElementInformation: any;
  private contextMenuOptions: any = [];

  constructor(private ContextMenuDataService: ContextMenuDataService,
              private renderer: Renderer) {
    this.ContextMenuDataService.actionData.subscribe(actionInfo => {
      this.mouseLocation = actionInfo.mouseLocation;
      this.information = actionInfo.information;
      this.targetElementInformation = actionInfo.targetElementInformation;
    });

    this.contextMenuOptions = this.ContextMenuDataService.GetContextMenuOptions();
  }

  ngOnInit() {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (!(event.target.id === 'context-menu-container')) {
        document.getElementById('context-menu-container').style.display = 'none';
      }
    });
  }

  get getMouseLocation(): any {
    return {
      left: this.mouseLocation.left + 'px',
      top: this.mouseLocation.top + 'px',
    }
  }

  contextItemListener(action: any): void {
    let clickedActionInfo: any = {};
    clickedActionInfo.action = action.action;
    clickedActionInfo.information = this.information;
    clickedActionInfo.targetElementInformation = this.targetElementInformation;
    this.ContextMenuDataService.SetActionInfo(clickedActionInfo);
  }
}
