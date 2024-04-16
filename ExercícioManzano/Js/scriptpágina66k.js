// k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. (Página 66)
for (let num = 1; num <= 10; num += 2) {
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + num + " é: " + fatorial);
}