import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { ContactusRoutingModule } from './contactus-routing.module'
import { ContactusComponent } from './contactus.component'

@NgModule({
  imports: [NativeScriptCommonModule, ContactusRoutingModule],
  declarations: [ContactusComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContactusModule {}
