import { Injectable } from '@angular/core';

@Injectable()
export class FuncionalidadesService {

    private funcionalidades: Array<String> = [];
    constructor() { }
    
    setFuncionalidades(data: String) {
        this.funcionalidades.push(data)
    }

    getFuncionalidades(): Array<String> {
        return this.funcionalidades;
    }
    getItemTest() {
        return Array.from({ length: 100 }).map((_, i) => ({
            title: `Item ${i}`,
          }))
    }
}