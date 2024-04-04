import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CourseraCursoRoutingModule } from './coursera-curso-routing.module'
import { CourseraCursoComponent } from './coursera-curso.component'

@NgModule({
  imports: [NativeScriptCommonModule, CourseraCursoRoutingModule],
  declarations: [CourseraCursoComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CourseraCursoModule {}
