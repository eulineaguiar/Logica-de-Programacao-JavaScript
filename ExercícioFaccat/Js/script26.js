// 26) Calcular a quantidade média em estoque e verificar se é necessário efetuar compra
let quantidadeAtual = prompt("Digite a quantidade atual em estoque:");
let quantidadeMaxima = prompt("Digite a quantidade máxima em estoque:");
let quantidadeMinima = prompt("Digite a quantidade mínima em estoque:");
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;
alert("A quantidade média em estoque é: " + quantidadeMedia);
if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}