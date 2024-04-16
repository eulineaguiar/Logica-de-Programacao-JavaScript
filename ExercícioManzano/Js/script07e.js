// e) Calcular e apresentar o valor de uma prestação em atraso (páginas 25 e 26)
let valor = prompt("Digite o valor da prestação:");
let taxa = prompt("Digite a taxa de juros:");
let tempo = prompt("Digite o tempo de atraso:");
let prestacao = valor + (valor * taxa/100) * tempo;
alert("O valor da prestação em atraso é: " + prestacao);