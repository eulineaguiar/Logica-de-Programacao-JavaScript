// 36) Calcular a soma e o produto das idades
let idadeHomem1 = prompt("Digite a idade do primeiro homem:");
let idadeHomem2 = prompt("Digite a idade do segundo homem:");
let idadeMulher1 = prompt("Digite a idade da primeira mulher:");
let idadeMulher2 = prompt("Digite a idade da segunda mulher:");

let homemMaisVelho = Math.max(idadeHomem1, idadeHomem2);
let homemMaisNovo = Math.min(idadeHomem1, idadeHomem2);
let mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2);
let mulherMaisNova = Math.min(idadeMulher1, idadeMulher2);

let somaIdades = homemMaisVelho + mulherMaisNova;
let produtoIdades = homemMaisNovo * mulherMaisVelha;

alert("A soma das idades do homem mais velho com a mulher mais nova é: " + somaIdades);
alert("O produto das idades do homem mais novo com a mulher mais velha é: " + produtoIdades);