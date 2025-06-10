import readlinesync = require("readline-sync");
import {colors} from "./src/util/Colors";
import {Caneta} from './src/model/Caneta';
import {Caderno} from './src/model/Caderno';
import {ProdutoController} from "./src/controller/ProdutoController";

export function main(){

    let produtos: ProdutoController = new ProdutoController();

    let can1: Caneta = new Caneta(produtos.gerarCodigo(), 'Caneta lisa', 'UN', 6.35, 18, 'BIC', 1, 'Azul');
    produtos.cadastrar(can1);
    let can2: Caneta = new Caneta(produtos.gerarCodigo(), 'Caneta especial', 'PCT', 3.30, 24, 'ZIP', 1, 'Colorido');
    produtos.cadastrar(can2);
    let car1: Caderno = new Caderno(produtos.gerarCodigo(), 'Caderno espiral 10 matérias', 'UN', 26.25, 20, 'TILIBRA', 2, 100);
    produtos.cadastrar(car1);
    let car2: Caderno = new Caderno(produtos.gerarCodigo(), 'Caderno ben10', 'UN', 36.35, 24, 'MORMAI', 2, 200);
    produtos.cadastrar(car2);

    let opcao, codigo, valor, quantidade, tipo, numeroFolhas: number;
    let nome, unidade, cor, marca: string;
    const tiposProdutos = ['Caneta', 'Caderno'];

    while(true){
        console.log("                                      ");
        console.log("                                      ");
        console.log("                                      ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");
        console.log("     MALUNGA - SUA PAPELARIA CERTA    ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");
        console.log("      1 - Cadastrar produto           ");
        console.log("      2 - Listar todos os Produtos    ");
        console.log("      3 - Editar um produto           ");
        console.log("      4 - Deletar um produto          ");
        console.log("      5 - Listar um produto           ");
        console.log("      6 - Sair                        ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");

        console.log("Digite uma opção do menu: ");
        opcao = readlinesync.questionInt("");

if (opcao == 6) {
            console.log("\nMalunga - Papelaria para sonhar e realizar!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");

                console.log("\nDigite o tipo do produto:");
                tipo = readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

                console.log("\nDigite o nome do produto: ");
                nome = readlinesync.question("");

                console.log("\nDigite a unidade do produto (UN): ");
                unidade = readlinesync.question("");

                console.log("\nDigite o valor do produto (R$): ");
                valor = readlinesync.questionFloat("");

                console.log("\nDigite a quantidade do produto: ");
                quantidade = readlinesync.questionInt("");

                console.log("\nDigite a marca do produto: ");
                marca = readlinesync.question("");

                switch(tipo){
                    case 1:
                        console.log("Digite a cor do produto: ");
                        cor = readlinesync.question("");
                        produtos.cadastrar(new Caneta(produtos.gerarCodigo(), nome, unidade, valor, quantidade, marca, tipo, cor))
                        break;

                    case 2:
                        console.log("Digite a quantidade de folhas do produto: ");
                        numeroFolhas = readlinesync.questionInt("");
                        produtos.cadastrar(new Caderno(produtos.gerarCodigo(), nome, unidade, valor, quantidade, marca, tipo, numeroFolhas))
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produtos.listarTodos();
                keyPress()
                break;
            case 3:
                console.log("\n\nEditar produto \n\n");
                
                console.log("Digite o código do produto: ");
                codigo = readlinesync.questionInt("");
                let produto = produtos.buscarNoArray(codigo);

                if(produto != null){

                    console.log("\nDigite o nome do produto: ");
                    nome = readlinesync.question("");

                    console.log("\nDigite a unidade do produto (UN): ");
                    unidade = readlinesync.question("");

                    console.log("\nDigite o valor do produto (R$): ");
                    valor = readlinesync.questionFloat("");

                    console.log("\nDigite a quantidade do produto: ");
                    quantidade = readlinesync.questionInt("");

                    console.log("\nDigite a marca do produto: ");
                    marca = readlinesync.question("");

                    tipo = produto.tipo;

                    switch(tipo){
                        case 1:
                        console.log("Digite a cor do produto: ");
                        cor = readlinesync.question("");
                        produtos.editar(new Caneta(codigo, nome, unidade, valor, quantidade, marca, tipo,cor))
                        break;

                    case 2:
                        console.log("Digite a quantidade de folhas do produto: ");
                        numeroFolhas = readlinesync.questionInt("");
                        produtos.editar(new Caderno(codigo, nome, unidade, valor, quantidade, marca, tipo,numeroFolhas));
                        break;
                    }
                } else {
                    console.log("\nO produto: " + codigo + " não foi encontrado!");
                }


                keyPress()
                break;
            case 4:
                console.log("\n\nDeletar produto\n\n");
                console.log("\nDigite o código do produto: ");
                codigo = readlinesync.questionInt("");
                produtos.deletar(codigo);
                keyPress()
                break;
            case 5:
                console.log("\n\nListar um produto por nome\n\n");
                console.log("\nDigite o código do produto: ");
                codigo = readlinesync.questionInt("");
                produtos.pesquisarPorCodigo(codigo);
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Mateus Camargo - mateuscamargolima@gmail.com");
    console.log("github.com/mateuscamargo/projeto_ecommerce_malunga");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione uma tecla para continuar...");
    readlinesync.prompt();
}

main();