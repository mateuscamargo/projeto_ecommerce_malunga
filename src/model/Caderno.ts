import {Produto} from "./Produto";

export class Caderno extends Produto {

    private _numeroFolhas: number;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number, marca: string, tipo: number, numeroFolhas: number) {

        super(codigo, nome, unidade, valor, quantidade, marca, tipo);
        this._numeroFolhas = numeroFolhas;
        
    }

    public get numeroFolhas(){
        return this._numeroFolhas;
    }
    public set numeroFolhas(numeroFolhas: number){
        this._numeroFolhas = numeroFolhas;
    }
}