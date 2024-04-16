import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "list-countries",
    templateUrl: "./list-countries.component.html",
    styleUrls: ['./list-countries.component.scss']
})
export class ListcountriesComponent implements OnInit {
    listCountries = [
        {
            name: 'Colombia',
            description: '',
            capital: ''
        },
        {
            name: 'Venezuela',
            description: '',
            capital: ''
        },
        {
            name: 'Argentina',
            description: '',
            capital: ''
        },
        {
            name: 'Perú',
            description: '',
            capital: ''
        },
        {
            name: 'Mexico',
            description: '',
            capital: ''
        },
        {
            name: 'Estados Unidos',
            description: '',
            capital: ''
        },
        {
            name: 'Dinamarca',
            description: '',
            capital: ''
        },
        {
            name: 'España',
            description: '',
            capital: ''
        },
        {
            name: 'Chile',
            description: '',
            capital: ''
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
    }
}
