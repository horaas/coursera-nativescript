


import { Injectable } from "@angular/core"
import { Action } from "@ngrx/store"

import { Actions, act, createEffect, ofType } from "@ngrx/effects"
import { Observable, map } from "rxjs"

export interface NewsDataModelInterface {
    id?: number,
    title?: string,
    description?: string,
    isFavSelect?: boolean,
    nameReporter?: string,
    date?: string
}
export class LastNewsRead {
    constructor(public lastRead: NewsDataModelInterface){}
}

export interface LastNewsReadState {
    lastsRead: NewsDataModelInterface[]
}

export function initializenews() {
    return {
        lastsRead: []
    }
}

export enum NewsLastReadType {
    INIT_DATA = '[LastNewsRead] inicializa data',
    NUEVA_NEWS = '[LastNewsRead] nueva',
    ADD_NEWS = 'AÑADE UNA NUEVA NOTICIA AL ARRAY PARA PRESENTARLA EN LAS MAS LEIDAS'
}

//actions
export class InitDataACtions implements Action {
    type: string = NewsLastReadType.INIT_DATA
    constructor(public data: Array<NewsDataModelInterface>) {}
}

export class NewLastReadAction implements Action {
    type: string = NewsLastReadType.NUEVA_NEWS
    constructor(public newsRead: NewsDataModelInterface) {}
}

export class NewLastReadActionAdd implements Action {
    type: string = NewsLastReadType.ADD_NEWS
    constructor(public newsRead: NewsDataModelInterface) {}
}

export type NewsDataActionsAll = NewLastReadAction | InitDataACtions

// reducer

export function reducerNewsData(state: LastNewsReadState, action: NewsDataActionsAll): LastNewsReadState {

    switch (action.type) {
        case NewsLastReadType.INIT_DATA:
            const data: Array<NewsDataModelInterface> = (action as InitDataACtions).data
            return {
                ...state,
                lastsRead: data
            }
        case NewsLastReadType.ADD_NEWS:
            const lastRead = (action as NewLastReadAction).newsRead
            const validateNew = state.lastsRead.find((dataNews) => dataNews.id === lastRead.id)
            if (validateNew) {
                return state
            }
            return {
                ...state,
                lastsRead: [...state.lastsRead, lastRead]
            }
        default:
            return state
    }
}

//efects

@Injectable()
export class LastReadsEffects {

    newAdd: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(NewsLastReadType.NUEVA_NEWS),
        map((action: NewLastReadAction) => new NewLastReadActionAdd(action.newsRead))
    ))

    constructor(private actions$: Actions) {}
}