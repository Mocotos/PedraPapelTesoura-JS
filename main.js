const readline = require("readline");
const {jogar} = require("./game");
const {opcao_Valida} = require("./untils");

const vaiLer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha sua Jogada: ");
console.log("1- Pedra");
console.log("2- Papel");
console.log("3- Tesoura");

vaiLer.question("Digite o número da sua escolha: ", (resposta) => {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolha_Numero = parseFloat(resposta);
    const escolha_Usuario = resposta.toLowerCase();

    if (escolha_Numero < 1 || escolha_Numero > 3 || isNaN(escolha_Numero)) {
        console.log("Escolha inválida! Tente novamente. ");
    } else {
        const escolha_Usuario = opcoes[escolha_Numero - 1];
        console.log(`Você escolher: ${escolha_Usuario}`);
        console.log(jogar(escolha_Usuario));
    }

    vaiLer.close();
})