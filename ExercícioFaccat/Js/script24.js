// 24) Calcular o salário total de um vendedor com comissões
let salarioFixo = prompt("Digite o salário fixo:");
let valorVendas = prompt("Digite o valor das vendas efetuadas:");
let comissao;
if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
}
let salarioTotal = salarioFixo + comissao;
alert("O salário total do vendedor é: R$" + salarioTotal);