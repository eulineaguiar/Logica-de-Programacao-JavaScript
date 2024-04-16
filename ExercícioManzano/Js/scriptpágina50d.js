// d) Apresentar o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez. (Página 50)
let graos = 1;
let total = 0;
let quadro = 1;
do {
    total += graos;
    graos *= 2;
    quadro++;
} while (quadro <= 64);
alert("O total de grãos de trigo é: " + total);
