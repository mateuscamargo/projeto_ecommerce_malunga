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
    let car1: Caderno = new Caderno(produtos.gerarCodigo(), 'Caderno espiral 10 matérias', 'UN', 26.25, 20, 'TILIBRA', 2, 100, "G");
    produtos.cadastrar(car1);
    let car2: Caderno = new Caderno(produtos.gerarCodigo(), 'Caderno ben10', 'UN', 36.35, 24, 'MORMAI', 2, 200, "G");
    produtos.cadastrar(car2);

    let opcao, codigo, valor, quantidade, tipo, numeroFolhas: number;
    let nome, unidade, cor, marca, tamanho: string;
    const tiposProdutos = ['Caneta', 'Caderno'];
    const tamanhoCadernos = ['G', 'M', 'P']

    while(true){
        console.log("\n\n\n\n\n\n\n                                      ");
        console.log("**************************************");
        console.log("                                      ");
        console.log("      MALUNGA - A PAPELARIA CERTA     ");
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
        
        try {
            console.log("Digite uma opção do menu: ");
            opcao = readlinesync.questionInt("");
        } catch {
            console.log("\nEntrada inválida! Use apenas números.");
            keyPress();
            continue;
        }

    if (opcao == 6) {
            console.log("\n*****************************************************");
            console.log("\nMalunga - Papelaria para sonhar e realizar!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");

                console.log("\nDigite o tipo do produto:");
                tipo = readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

                nome = campoTextoObrigatorio("\nDigite o nome do produto: ");
                unidade = campoTextoObrigatorio("\nDigite a unidade de medida do produto: ");

                console.log("\nDigite o valor do produto (R$): ");
                valor = readlinesync.questionFloat("");

                console.log("\nDigite a quantidade do produto: ");
                quantidade = readlinesync.questionInt("");

                marca = campoTextoObrigatorio("\nDigite a marca do produto: ");

                switch(tipo){
                    case 1:
                        console.log("Digite a cor do produto: ");
                        cor = readlinesync.question("");
                        produtos.cadastrar(new Caneta(produtos.gerarCodigo(), nome, unidade, valor, quantidade, marca, tipo, cor))
                        break;

                    case 2:
                        console.log("Digite a quantidade de folhas do produto: ");
                        numeroFolhas = readlinesync.questionInt("");

                        const indexTamanho = readlinesync.keyInSelect(tamanhoCadernos, "", {cancel: false}) + 1;
                        tamanho = tamanhoCadernos[indexTamanho];

                        produtos.cadastrar(new Caderno(produtos.gerarCodigo(), nome, unidade, valor, quantidade, marca, tipo, numeroFolhas, tamanho))
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

                    nome = campoTextoObrigatorio("\nDigite o nome do produto: ");
                    unidade = campoTextoObrigatorio("\nDigite a unidade de medida do produto: ");
                    
                    console.log("\nDigite o valor do produto (R$): ");
                    valor = readlinesync.questionFloat("");

                    console.log("\nDigite a quantidade do produto: ");
                    quantidade = readlinesync.questionInt("");

                    marca = campoTextoObrigatorio("\nDigite a marca do produto: ");

                    tipo = produto.tipo;

                    switch(tipo){
                        case 1:
                        console.log("\nDigite a cor do produto: ");
                        cor = readlinesync.question("");
                        produtos.editar(new Caneta(codigo, nome, unidade, valor, quantidade, marca, tipo,cor))
                        break;

                    case 2:
                        console.log("\nDigite a quantidade de folhas do produto: ");
                        numeroFolhas = readlinesync.questionInt("");

                        const indexTamanho = readlinesync.keyInSelect(tamanhoCadernos, "", {cancel: false}) + 1;
                        tamanho = tamanhoCadernos[indexTamanho];

                        produtos.editar(new Caderno(codigo, nome, unidade, valor, quantidade, marca, tipo,numeroFolhas, tamanho));
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
    console.log("\nPressione o <Enter> para continuar...");
    readlinesync.prompt();
}

function campoTextoObrigatorio(pergunta: string): string{
    let resposta: string;

    do {
        console.log(pergunta);
        resposta = readlinesync.question("")

        if (!resposta || resposta.trim() === "") {
            console.log("Este campo é obrigatório. Tente novamente.\n");
        }

    } while(!resposta || resposta.trim() === "");

    return resposta.trim();

}

main();