import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ReadDetailsRoutingModule } from './read-details-routing.module'
import { ReadDetailsComponent } from './read-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, ReadDetailsRoutingModule],
  declarations: [ReadDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ReadDetailsModule {}
