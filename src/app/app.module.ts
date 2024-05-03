import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FuncionalidadesService } from './providers/funcionalidades.services'
import { NewsService } from './providers/news.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule, NativeScriptFormsModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [FuncionalidadesService, NewsService]
})
export class AppModule {}
