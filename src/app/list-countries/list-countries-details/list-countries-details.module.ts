import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ListCountriesDetailsRoutingModule } from './list-countries-details.routing.module'
import { ListCountriesDetailsComponent } from './list-countries-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, ListCountriesDetailsRoutingModule],
  declarations: [ListCountriesDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListCountriesDetailsModule {}
