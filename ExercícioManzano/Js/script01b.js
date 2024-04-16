// b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). (páginas 46 e 47)
let soma = 0;
let i = 1;
while (i <= 100) {
    soma += i;
    i++;
}
alert("A soma dos cem primeiros números inteiros é: " + soma);