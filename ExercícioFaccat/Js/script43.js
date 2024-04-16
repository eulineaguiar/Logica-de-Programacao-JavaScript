// 43) Algoritmo para determinar o tipo de um triângulo com base nos comprimentos dos lados
function tipoTriangulo() {
    let a = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
    let b = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
    let c = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

    let mens;
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            mens = 'Triângulo Equilátero';
        } else if (a === b || b === c || a === c) {
            mens = 'Triângulo Isósceles';
        } else {
            mens = 'Triângulo Escaleno';
        }
    } else {
        mens = 'Não é possível formar um triângulo';
    }

    alert(mens);
}

tipoTriangulo();