// 46) Acrescentando uma mensagem de 'VALOR INVÁLIDO' no exercício 44
function dividir() {
    let a = parseFloat(prompt("Digite o valor de a:"));
    while (isNaN(a)) {
        alert('VALOR INVÁLIDO. Informe um novo valor para a.');
        a = parseFloat(prompt('Informe um novo valor para a: '));
    }

    let b = parseFloat(prompt("Digite o valor de b:"));
    while (b === 0 || isNaN(b)) {
        alert(b === 0 ? 'O segundo valor não pode ser ZERO. Informe um novo valor.' : 'VALOR INVÁLIDO. Informe um novo valor para b.');
        b = parseFloat(prompt('Informe um novo valor para b: '));
    }

    let resultado = a / b;
    alert("O resultado da divisão é: " + resultado);
}

dividir();