// e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. (Página 50)
let soma = 0;
let i = 0;
do {
    let num = parseInt(prompt("Digite um número:"));
    let fatorial = 1;
    for (let j = 1; j <= num; j++) {
        fatorial *= j;
    }
    soma += fatorial;
    i++;
} while (i < 15);
alert("O somatório da fatorial dos números é: " + soma);