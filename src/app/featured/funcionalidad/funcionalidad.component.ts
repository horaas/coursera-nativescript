import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	selector: 'Funcionalidad',
	templateUrl: './funcionalidad.component.html',
	styleUrls: ['./funcionalidad.component.scss']
})

export class FuncionalidadComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	}
}