// 16) Calcular o custo total da compra de maçãs
let numMaca = prompt("Digite o número de maçãs compradas:");
let custoTotal;
if (numMaca < 12) {
    custoTotal = numMaca * 1.30;
} else {
    custoTotal = numMaca * 1.00;
}
alert("O custo total da compra é: R$" + custoTotal);