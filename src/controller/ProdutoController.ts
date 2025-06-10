import {colors} from "../util/Colors";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository{
    
    private listaProdutos: Array<Produto> = new Array<Produto>();
    codigo: number = 0;

    cadastrar(produto: Produto): void {

        this.listaProdutos.push(produto);
        console.log("\nO produto: " + produto.nome + "foi cadastrado com sucesso!");
    }

    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }

    editar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.codigo);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO produto: " + produto.codigo + " - " + produto.nome + " foi atualizado com sucesso!");
        } else{
            console.log("\nO produto: " + produto.codigo + " não foi encontrado!");
        }

    }

    deletar(codigo: number): void {
        let buscaProduto = this.buscarNoArray(codigo);

        if(buscaProduto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto: " + codigo + " - " + buscaProduto.nome + " foi deletado com sucesso!");
        } else{
            console.log("\nO produto: " + codigo + " não foi encontrado!");
        }
    }

    pesquisarPorCodigo(codigo: number): void {
        let buscaProduto = this.buscarNoArray(codigo);

        if(buscaProduto != null){
            buscaProduto.visualizar();
        } else{
            console.log("\nO produto: " + codigo + " não foi encontrado!");
        }
    }    

    public gerarCodigo(): number{
        return ++ this.codigo;
    }

    public buscarNoArray(codigo: number): Produto | null {
        for(let produto of this.listaProdutos){
            if(produto.codigo === codigo)
                return produto;
        }
        return null;
    }
}