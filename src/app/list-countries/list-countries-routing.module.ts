import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ListcountriesComponent } from "./list-countries.component";

const routes: Routes = [
    { path: "", component: ListcountriesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListcountriesRoutingModule { }
