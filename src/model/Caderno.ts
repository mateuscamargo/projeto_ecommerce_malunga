import {Produto} from "./Produto";

export class Caderno extends Produto {

    private _numeroFolhas: number;
    private _marca: string;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number, numeroFolhas: number, marca: string) {

        super(codigo, nome, unidade, valor, quantidade);
        this._numeroFolhas = numeroFolhas;
        this._marca = marca;
        
    }

    public get numeroFolhas(){
        return this._numeroFolhas;
    }
    public set numeroFolhas(numeroFolhas: number){
        this._numeroFolhas = numeroFolhas;
    }

    public get marca(){
        return this._marca;
    }
    public set marca(marca: string){
        this._marca = marca;
    }
}