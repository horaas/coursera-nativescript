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
}