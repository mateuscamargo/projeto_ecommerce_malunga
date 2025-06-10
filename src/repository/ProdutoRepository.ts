import {Produto} from "../model/Produto";

export interface ProdutoRepository{

    //CRUD DO PRODUTO
    pesquisarPorCodigo(codigo: number): void;
    cadastrar(produto: Produto): void;
    editar(produto: Produto): void;
    deletar(codigo: number): void;
    listarTodos(): void;
    
}