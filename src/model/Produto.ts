
export abstract class Produto{

    private _codigo: number;
    private _nome: string;
    private _unidade: string;
    private _valor: number;
    private _quantidade: number;

    constructor(codigo: number, nome: string, unidade: string, valor: number, quantidade: number){

        this._codigo    = codigo;
        this._nome      = nome;
        this._unidade   = unidade;
        this._valor     = valor;
        this._quantidade = quantidade;


    }

    public get codigo(){
        return this._codigo;
    }
    public set codigo(codigo: number){
        this._codigo = codigo;
    }

    public get nome(){
        return this._nome;
    }
    public set nome(nome: string){
        this._nome = nome;
    }

    public get unidade(){
        return this._unidade;
    }
    public set unidade(unidade: string){
        this._unidade = unidade;
    }

    public get valor(){
        return this._valor;
    }
    public set valor(valor: number){
        this._valor = valor;
    }

    public get quantidade(){
        return this._quantidade;
    }
    public set quantidade(quantidade: number){
        this._quantidade = quantidade;
    }

    public cadastrar(codigo: number, nome: string, valor: number, quantidade: number, unidade: string){

    }

    public editar(codigo: number): boolean{
        return true
    }

    public deletar(codigo: number): boolean{
        return true;
    }

    public visualizarProdutos(){

        console.log("\n\n********************");
        console.log("Produtos: ");
        console.log("********************");
        console.log("Código: " + this._codigo);
        console.log("Produto: " + this._nome);
        console.log("Unidade: " + this._unidade);
        console.log("Valor: " + this._valor);
        console.log("Qtd. Disp.: " + this._quantidade);

    }

}