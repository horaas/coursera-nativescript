import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { FuncionalidadesService } from '../../providers/funcionalidades.services'
@Component({
	selector: 'funcionalidad',
	templateUrl: './funcionalidad.component.html',
	styleUrls: ['./funcionalidad.scss']
})

export class FuncionalidadComponent implements OnInit {

	constructor(public funcionalidades: FuncionalidadesService) { }

	ngOnInit() {
		this.funcionalidades.setFuncionalidades('home')
		this.funcionalidades.setFuncionalidades('browser')
		this.funcionalidades.setFuncionalidades('search')
		this.funcionalidades.setFuncionalidades('featured')
		this.funcionalidades.setFuncionalidades('about')
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	}
}