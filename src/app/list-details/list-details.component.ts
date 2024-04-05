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
  templateUrl: './list-details.component.html',
})
export class ListDetalisComponent implements OnInit {
  detailList = {
    guia: ['guia1', 'guia2', 'guia3', 'guia4'],
    lugares: ['lugares1', 'lugares2', 'lugares3', 'lugares4'],
    sugerencias: ['sugerencias1', 'sugerencias2', 'sugerencias3', 'sugerencias4'],
  }
  filterData = []
  optionFilter = ''
  constructor(private _routerExtensions: Router) {
    this.optionFilter = this._routerExtensions.getCurrentNavigation().extras.state.filter as string
  }

  ngOnInit(): void {
    
    this.filterData = this.detailList[this.optionFilter] 
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  refreshList(args) {
    const pullRefresh = args.object;
    setTimeout(() => {
      this.filterData.push(this.optionFilter + (this.filterData.length + 1))
       pullRefresh.refreshing = false;
    }, 1000);
}

}
