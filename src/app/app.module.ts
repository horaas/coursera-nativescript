import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FuncionalidadesService } from './providers/funcionalidades.services'
import { NewsService } from './providers/news.service'
import { ActionReducerMap, StoreModule as NgRxStoreModule} from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { initializenews, LastNewsReadState, LastReadsEffects, reducerNewsData } from './favorites/news-state.model'
export interface AppState {
  lasReadNews: LastNewsReadState
}

const reducers: ActionReducerMap<AppState> = {
  lasReadNews: reducerNewsData
}

const reducerInitialState = {
  lasReadNews: initializenews()
}
@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule, NativeScriptFormsModule,
    NgRxStoreModule.forRoot(reducers, {initialState: reducerInitialState}),
    EffectsModule.forRoot([LastReadsEffects])
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [FuncionalidadesService, NewsService]
})
export class AppModule {}
