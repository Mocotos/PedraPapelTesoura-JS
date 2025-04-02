function opcao_Valida(escolhas) {
    const Opcao_Validas = ["pedra", "tesoura", "papel"];
    return Opcao_Validas.includes(escolhas.toLowerCase());
}
module.exports = {opcao_Valida};