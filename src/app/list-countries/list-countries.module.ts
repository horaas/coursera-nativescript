
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule} from '@nativescript/angular'

import { ListcountriesRoutingModule } from './list-countries-routing.module'
import { ListcountriesComponent } from './list-countries.component'
import { FormSearchComponent } from '../form-search/form-search.component'
import { ListCountriesDetailsComponent } from './list-countries-details/list-countries-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, ListcountriesRoutingModule, NativeScriptFormsModule],
  declarations: [ListcountriesComponent, FormSearchComponent, ListCountriesDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListcountriesModule {}