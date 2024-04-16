// 11) Calcular o salário final de um vendedor
let numCarrosVendidos = prompt("Digite o número de carros vendidos:");
let valorVendas = prompt("Digite o valor total das vendas:");
let salarioFixo = prompt("Digite o salário fixo:");
let valorPorCarro = prompt("Digite o valor recebido por carro vendido:");
let salarioFinal = salarioFixo + (numCarrosVendidos * valorPorCarro) + (0.05 * valorVendas);
alert("O salário final do vendedor é: " + salarioFinal);