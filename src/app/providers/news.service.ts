import {Injectable} from "@angular/core"
import { getJSON, request } from "@nativescript/core/http"

@Injectable()
export class NewsService {
    api: string = 'https://driving-liger-usefully.ngrok-free.app/'

    add(data: string) {
        return request({
            url: this.api + 'favs',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            content: JSON.stringify(
                {
                    nuevo: data || ''
                }
            )
        })
    }

    getFavs() {
        return getJSON(this.api + 'favs')
    }

    handleSearch(dataSearch: string = '') {
        return getJSON(this.api + 'get?search=' + dataSearch)
    }
}