import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'
import { SearchFormComponent } from '../search-form/search-form.component'
import { MinLenDirective } from "../search-form/search-form.validator"; 
@NgModule({
  imports: [NativeScriptCommonModule, ListRoutingModule, NativeScriptFormsModule],
  declarations: [ListComponent, SearchFormComponent, MinLenDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListModule {}
