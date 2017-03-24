import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";
import {defaultMenuOptions} from '../default-menu-options';

@Injectable()
export class ContextMenuDataService {
  public contextMenuOptions: any = [];
  public actionData: Subject<any> = new Subject<any>();
  public actionInformation: Subject<any> = new Subject<any>();
  public action: any;

  constructor() {
  }

  AddContextMenuOptions(contextMenuOptions: any): void {
    // this.contextMenuOptions = [...defaultMenuOptions, ...contextMenuOptions];
    if (typeof  contextMenuOptions === 'object' && Array.isArray(contextMenuOptions) && contextMenuOptions.length > 0) {
      this.contextMenuOptions = [...contextMenuOptions];
    }
    else {
      throw new Error('Error: Invalid parameters is passed to "AddContextMenuOptions". Goto docs: https://github.com/sauravgaursmith/ng2-context-menu/blob/master/README.md');
    }
  }

  GetContextMenuOptions(): any {
    return this.contextMenuOptions;
  }

  SetActionInfo(actionInfo: any): void {
    this.action = actionInfo;
    this.actionInformation.next(this.action);
  }

  OnMenuClick(): Observable<any> {
    return this.actionInformation.asObservable();
  }

}


