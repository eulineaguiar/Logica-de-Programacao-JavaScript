// 40) Algoritmo para calcular o total a pagar pelo cliente após descontos
function calcularTotal() {
    let nomeProduto = prompt("Digite o nome do produto:");
    let quantidade = parseFloat(prompt("Digite a quantidade do produto:"));
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

    let total = quantidade * precoUnitario;
    let desconto;

    if (quantidade <= 5) {
        desconto = total * 0.02;
    } else if (quantidade > 5 && quantidade <= 10) {
        desconto = total * 0.03;
    } else {
        desconto = total * 0.05;
    }

    let totalAPagar = total - desconto;

    alert("O total a pagar pelo " + nomeProduto + " é: R$" + totalAPagar.toFixed(2));
}

calcularTotal();