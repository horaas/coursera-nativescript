import { Component, EventEmitter, OnInit, Output } from "@angular/core";


@Component({
    selector: "search-form",
    templateUrl: "./search-form.component.html",
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    textfielValue:string = ''
    @Output() search: EventEmitter<string> = new EventEmitter()

    constructor() {
    }

    ngOnInit(): void {
    }

    onButtontap(): void {
        if (this.textfielValue.length > 2) {
            this.search.emit(this.textfielValue)
        }
    }
}
