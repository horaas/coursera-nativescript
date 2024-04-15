import { Injectable } from '@angular/core';

@Injectable()
export class FuncionalidadesService {

    private funcionalidades: Array<string> = [];
    constructor() { }
    
    setFuncionalidades(data: string) {
        this.funcionalidades.push(data)
    }

    getFuncionalidades(): Array<string> {
        return this.funcionalidades;
    }
    getItemTest() {
        return Array.from({ length: 100 }).map((_, i) => ({
            title: `Item ${i}`,
          }))
    }
}