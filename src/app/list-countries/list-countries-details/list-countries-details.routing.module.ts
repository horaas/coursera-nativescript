import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ListCountriesDetailsComponent } from "./list-countries-details.component";

const routes: Routes = [
    { path: "", component: ListCountriesDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListCountriesDetailsRoutingModule { }
