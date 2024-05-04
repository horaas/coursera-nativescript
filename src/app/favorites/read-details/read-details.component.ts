import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { Route, Router } from '@angular/router'

import { registerElement } from '@nativescript/angular';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
registerElement('PullToRefresh', () => PullToRefresh);

@Component({
  selector: 'List',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.scss']
})
export class ReadDetailsComponent implements OnInit {
  optionFilter: any = {}
  constructor(private _routerExtensions: Router) {
    this.optionFilter = this._routerExtensions.getCurrentNavigation().extras.state.filter || {}
  }

  ngOnInit(): void {  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}
