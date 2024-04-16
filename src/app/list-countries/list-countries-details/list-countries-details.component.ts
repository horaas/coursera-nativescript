import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
@Component({
    selector: "list-countries-details",
    templateUrl: "./list-countries-details.component.html",
    styleUrls: ['./list-countries-details.component.scss']
})
export class ListCountriesDetailsComponent implements OnInit {

    country:any = {}
    constructor(private _routerExtensions: Router) {
        this.country = this._routerExtensions.getCurrentNavigation().extras.state.country as any
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
    }
}
