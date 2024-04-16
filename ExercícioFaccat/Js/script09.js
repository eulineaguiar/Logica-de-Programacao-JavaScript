// 9) Calcular o novo salário com reajuste
let salarioAtual = prompt("Digite o salário atual:");
let percentualReajuste = prompt("Digite o percentual de reajuste:");
let novoSalario = salarioAtual * (1 + (percentualReajuste / 100));
alert("O novo salário é: " + novoSalario);