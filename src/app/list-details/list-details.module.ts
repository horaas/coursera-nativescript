import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ListDetailsRoutingModule } from './list-details-routing.module'
import { ListDetalisComponent } from './list-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, ListDetailsRoutingModule],
  declarations: [ListDetalisComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListDetailsModule {}
