import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { ActivityIndicator, Application, Color, View } from '@nativescript/core'
import { FuncionalidadesService } from '../providers/funcionalidades.services'
import { RouterExtensions } from '@nativescript/angular'
import { NewsService } from '../providers/news.service'
import * as Toast from 'nativescript-toast'
import { Store } from '@ngrx/store'
import { AppState } from '../app.module'
import { NewsDataModelInterface } from './news-state.model'

@Component({
  selector: 'Favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  resultData: string[] = []
  showActivityIndicator = true
  moreNewsRead = []

  constructor(public funcionalidades: FuncionalidadesService, private routerExtensions: RouterExtensions,
    private newService: NewsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.searchNowFavorites()
    this.store.select((state) => state.lasReadNews.lastsRead).subscribe({
      next: (data) => {
        this.moreNewsRead = data
      }
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }


  onNavItemTap(navItemRoute: string, data: NewsDataModelInterface): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
      state: { filter: data }
    })
  }

  searchNowFavorites(dataSearch?: string): void {
    this.showActivityIndicator = true
    this.newService.handleSearch(dataSearch).then((result: any[]) => {
      this.resultData = result.filter((data) => data.isFavSelect)
      this.showActivityIndicator = false
    }).catch(() => {
      this.showActivityIndicator = false
      Toast.makeText("Error en la busqueda", 'long').show()
    })
  }
}
