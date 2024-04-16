// 31) Verificar se 3 valores formam um triângulo
let A = prompt("Digite o primeiro valor:");
let B = prompt("Digite o segundo valor:");
let C = prompt("Digite o terceiro valor:");
if (A < B + C && B < A + C && C < A + B) {
    alert("Os valores formam um triângulo.");
} else {
    alert("Os valores não formam um triângulo.");
}