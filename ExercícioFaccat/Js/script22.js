// 22) Calcular o salário total de um funcionário com horas extras
let horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês:");
let salarioPorHora = prompt("Digite o salário por hora:");

let horasRegulares = Math.min(horasTrabalhadas, 40 * 4); // 40 horas por semana, 4 semanas por mês
let horasExtras = Math.max(0, horasTrabalhadas - 40 * 4);

let salarioRegular = horasRegulares * salarioPorHora;
let salarioExtra = horasExtras * salarioPorHora * 1.5; // 50% de acréscimo

let salarioTotal = salarioRegular + salarioExtra;

alert("O salário total do funcionário é: R$" + salarioTotal);