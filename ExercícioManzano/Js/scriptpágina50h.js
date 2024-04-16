// h) Elaborar um programa que possibilite calcular a área total de uma residência. (Página 50)
let areaTotal = 0;
let continuar = "SIM";
do {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"));
    let area = largura * comprimento;
    alert("A área do " + nome + " é: " + area);
    areaTotal += area;
    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)");
} while (continuar.toUpperCase() === "SIM");
alert("A área total da residência é: " + areaTotal);