import { Injectable } from '@angular/core';

// Se hace uso en el componente home
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