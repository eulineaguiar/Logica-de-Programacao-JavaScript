// e) Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes. (páginas 41 e 42)
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));
if (A != 0) {
    let delta = Math.pow(B, 2) - 4 * A * C;
    if (delta >= 0) {
        let raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
        let raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
        alert("As raízes da equação são: " + raiz1 + " e " + raiz2);
    } else {
       alert("Não existem raízes reais para essa equação.");
    }
} else {
    alert("O valor de A deve ser diferente de zero.");
}