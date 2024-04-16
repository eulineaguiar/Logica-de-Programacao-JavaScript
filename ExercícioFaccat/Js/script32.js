// 32) Ler o nome de 2 times e o número de gols e escrever o nome do vencedor
let time1 = prompt("Digite o nome do primeiro time:");
let golsTime1 = prompt("Digite o número de gols do primeiro time:");
let time2 = prompt("Digite o nome do segundo time:");
let golsTime2 = prompt("Digite o número de gols do segundo time:");
if (golsTime1 > golsTime2) {
    alert("O vencedor é: " + time1);
} else if (golsTime2 > golsTime1) {
    alert("O vencedor é: " + time2);
} else {
    alert("EMPATE");
}