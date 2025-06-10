import {Produto} from "./Produto";

export class Caderno extends Produto {

    private _numeroFolhas: number;
    private _tamanho: string;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number, marca: string, tipo: number, numeroFolhas: number, tamanho: string) {

        super(codigo, nome, unidade, valor, quantidade, marca, tipo);
        this._numeroFolhas = numeroFolhas;
        this._tamanho = tamanho;
        
    }

    public get numeroFolhas(){
        return this._numeroFolhas;
    }
    public set numeroFolhas(numeroFolhas: number){
        this._numeroFolhas = numeroFolhas;
    }

    public get tamanho(){
        return this._tamanho;
    }
    public set tamanho(tamanho: string){
        this._tamanho = tamanho;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Nº de Folhas: " + this.numeroFolhas);
        console.log("Tamanho: " + this.tamanho);
    }
}