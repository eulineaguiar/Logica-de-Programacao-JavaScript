// 44) Algoritmo para ler 2 valores e realizar a divisão
function dividir() {
    let a = parseFloat(prompt("Digite o valor de a:"));
    let b = parseFloat(prompt("Digite o valor de b:"));

    while (b === 0) {
        alert('O segundo valor não pode ser ZERO. Informe um novo valor.');
        b = parseFloat(prompt('Informe um novo valor para b: '));
    }

    let resultado = a / b;
    alert("O resultado da divisão é: " + resultado);
}

dividir();