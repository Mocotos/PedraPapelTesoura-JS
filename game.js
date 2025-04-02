const escolhas = ["pedra", "papel", "tesoura"];

function jogar(escolha_Usuario) {
    const escolha_Computador = escolhas[Math.floor(Math.random() * escolhas.length)];
    if (escolha_Usuario === escolha_Computador) {
        return `Empate!!! Ambos jogaram ${escolha_Usuario}`
    }
    if (
        (escolha_Usuario === "pedra" && escolha_Computador === "tesoura") || 
        (escolha_Usuario === "papel" && escolha_Computador === "pedra") ||
        (escolha_Usuario === "tesoura" && escolha_Computador === "papel")
        ){
            return `Você venceu ${escolha_Usuario} ganha de ${escolha_Computador}`;

        } else {
            return `você perdeu ${escolha_Computador} Ganha de ${escolha_Usuario}`
        }
}
module.exports = {jogar};