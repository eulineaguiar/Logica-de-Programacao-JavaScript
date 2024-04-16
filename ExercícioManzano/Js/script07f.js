// f) Trocar valores de A e B (páginas 25 e 26)
let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");
[A, B] = [B, A];
alert("O valor de A agora é: " + A);
alert("O valor de B agora é: " + B);