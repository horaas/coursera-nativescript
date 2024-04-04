import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CourseraRoutingModule } from './coursera-routing.module'
import { CourseraComponent } from './coursera.component'

@NgModule({
  imports: [NativeScriptCommonModule, CourseraRoutingModule],
  declarations: [CourseraComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CourseraModule {}
