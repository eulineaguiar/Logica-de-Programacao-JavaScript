// c) Apresentar todos os números divisíveis por 4 que sejam menores que 200. (Página 50)
let num = 1;
do {
    if (num % 4 === 0) {
        alert(num);
    }
    num++;
} while (num < 200);