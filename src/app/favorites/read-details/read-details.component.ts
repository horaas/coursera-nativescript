import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Router } from '@angular/router'
import { registerElement } from '@nativescript/angular';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
import { NewLastReadAction, NewsDataModelInterface } from '../news-state.model';
import { AppState } from '~/app/app.module';
import { Store } from '@ngrx/store';

registerElement('PullToRefresh', () => PullToRefresh);

@Component({
  selector: 'List',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.scss']
})
export class ReadDetailsComponent implements OnInit {
  optionFilter: NewsDataModelInterface = {}
  constructor(private store: Store<AppState>, private _routerExtensions: Router) {
    this.optionFilter = this._routerExtensions.getCurrentNavigation().extras.state.filter || {}
  }

  ngOnInit(): void { 
    this.store.dispatch(new NewLastReadAction(this.optionFilter))
   }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}
