import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2ContextMenuComponent} from './ng2-context-menu.component';
import {ContextMenuDirective} from './directive/context-menu.directive';
import {ContextMenuDataService} from "./service/context-menu-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng2ContextMenuComponent, ContextMenuDirective],
  providers: [
    ContextMenuDataService
  ],
  exports: [
    Ng2ContextMenuComponent,
    ContextMenuDirective
  ]
})
export class Ng2ContextMenuModule {
}
