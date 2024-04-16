// 35) Cálculo de Combustivel
let litros = prompt("Digite o número de litros vendidos:");
let tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool, G para gasolina):");

let precoLitro;
let desconto;

if (tipoCombustivel == "A") {
    precoLitro = 2.90;
    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
} else if (tipoCombustivel == "G") {
    precoLitro = 3.30;
    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
}

let valorTotal = litros * precoLitro * (1 - desconto);

alert("O valor a ser pago pelo cliente é: R$" + valorTotal.toFixed(2));