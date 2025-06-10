import {Produto} from "./Produto";

export class Caneta extends Produto {
    
    private _cor: string;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number, marca: string, tipo: number, cor: string){

        super(codigo, nome, unidade, valor, quantidade, marca, tipo);
        this._cor = cor;

    }

    public get cor(){
        return this._cor;
    }
    public set cor(cor: string){
        this._cor = cor;
    }

}