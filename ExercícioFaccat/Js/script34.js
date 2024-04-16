// 34) Teste de Mesa
let x = prompt("Digite o valor de x:");
let y = prompt("Digite o valor de y:");
let z = (x * y) + 5;
let resposta;

if (z <= 0) {
    resposta = 'A';
} else {
    if (z <= 100) {
        resposta = 'B';
    } else {
        resposta = 'C';
    }
}

alert("Z: " + z + ", Resposta: " + resposta);