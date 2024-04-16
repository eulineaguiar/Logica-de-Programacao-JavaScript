// 37) Calcular o valor a ser pago pelo cliente na fruteira
function calcularValor() {
    let morangoKg = parseFloat(prompt("Digite a quantidade em Kg de morangos:"));
    let macaKg = parseFloat(prompt("Digite a quantidade em Kg de maçãs:"));

    let precoMorango = morangoKg > 5 ? 2.20 : 2.50;
    let precoMaca = macaKg > 5 ? 1.50 : 1.80;

    let totalMorango = morangoKg * precoMorango;
    let totalMaca = macaKg * precoMaca;

    let totalKg = morangoKg + macaKg;
    let totalValor = totalMorango + totalMaca;

    if (totalKg > 8 || totalValor > 25) {
        totalValor *= 0.9; // Desconto de 10%
    }

    alert("R$" + totalValor.toFixed(2));
}

calcularValor();