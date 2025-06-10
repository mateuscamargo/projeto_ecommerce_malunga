import readlinesync = require("readline-sync");
import {colors} from "./src/util/Colors";

export function main(){

    let opcao: number;

    while(true){
        console.log("**************************************");
        console.log("                                      ");
        console.log("     MALUNGA - SUA PAPELARIA CERTA    ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");
        console.log("      1 - Listar um produto           ");
        console.log("      2 - Cadastrar produto           ");
        console.log("      3 - Editar produto              ");
        console.log("      4 - Deletar produto             ");
        console.log("      5 - Listar todos os Produtos    ");
        console.log("      6 - Sair                        ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");

        console.log("Digite uma opção do menu: ");
        opcao = readlinesync.questionInt("");

if (opcao == 9) {
            console.log("\nMalunga - Papelaria para sonhar e realizar!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar um produto por código\n\n");
                keyPress()
                break;
            case 2:
                console.log("\n\nCadastrar produto\n\n");
                keyPress()
                break;
            case 3:
                console.log("\n\nEditar produto \n\n");
                keyPress()
                break;
            case 4:
                console.log("\n\nDeletar produto\n\n");
                keyPress()
                break;
            case 5:
                console.log("\n\nListar todos os Produtos\n\n");
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