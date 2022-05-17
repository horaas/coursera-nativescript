import { Component, OnInit } from '@angular/core';
import { Application, isAndroid } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	selector: 'contactus',
	templateUrl: './contactus.component.html',
	styleUrls: ['./contactus.component.scss']
})

export class ContactusComponent implements OnInit {

	textToShow: string = 'iOS'
	constructor() { }

	ngOnInit() {
		if (isAndroid) {
			this.textToShow = 'Android'
		}
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	}
}