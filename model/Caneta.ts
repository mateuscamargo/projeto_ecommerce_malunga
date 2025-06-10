import {Produto} from "./Produto";

export class Caneta extends Produto {
    
    private _cor: string;
    private _marca: string;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number, cor: string, marca: string){

        super(codigo, nome, unidade, valor, quantidade);
        this._cor = cor;
        this._marca = marca;

    }

    public get cor(){
        return this._cor;
    }
    public set cor(cor: string){
        this._cor = cor;
    }

    public get marca(){
        return this._marca;
    }
    public set marca(marca: string){
        this._marca = marca;
    }

}