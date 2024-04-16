// 25) Calcular o saldo atual de uma conta e verificar se é positivo ou negativo
let numeroConta = prompt("Digite o número da conta:");
let saldo = prompt("Digite o saldo:");
let debito = prompt("Digite o débito:");
let credito = prompt("Digite o crédito:");
let saldoAtual = saldo - debito + credito;
alert("O saldo atual da conta " + numeroConta + " é: R$" + saldoAtual);
if (saldoAtual >= 0) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}