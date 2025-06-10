import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    codigo: number = 0;

    visualizarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizarProdutos();
        }
    }
    cadastrar(codigo: number, nome: string, valor: number, quantidade: number, unidade: string): void {
        throw new Error("Method not implemented.");
    }
    editar(codigo: number): void {
        throw new Error("Method not implemented.");
    }
    deletar(codigo: number): void {
        throw new Error("Method not implemented.");
    }
    
}