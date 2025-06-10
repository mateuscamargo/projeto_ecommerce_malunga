import {Produto} from "../model/Produto";

export interface ProdutoRepository{

    //CRUD DO PRODUTO
    visualizarProdutos(): void;
    cadastrar(codigo: number, nome: string, valor: number, quantidade: number, unidade: string): void;
    editar(codigo: number): void;
    deletar(codigo: number): void;
    
}