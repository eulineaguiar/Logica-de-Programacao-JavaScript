// 42) Algoritmo para verificar se um empregado está qualificado para a aposentadoria ou não
function verificarAposentadoria() {
    let codigoEmpregado = prompt("Digite o código do empregado:");
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
    let anoIngresso = parseInt(prompt("Digite o ano de ingresso do empregado:"));

    let idade = new Date().getFullYear() - anoNascimento;
    let tempoTrabalho = new Date().getFullYear() - anoIngresso;

    let resultado;
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        resultado = 'Requerer aposentadoria';
    } else {
        resultado = 'Não requerer';
    }

    alert("O empregado de código " + codigoEmpregado + " deve: " + resultado);
}

verificarAposentadoria();