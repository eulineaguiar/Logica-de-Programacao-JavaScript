// k) Calcular a área total de uma residência. (páginas 46 e 47)
let soma = 0;
let areaTotal = 0;
let continuar = "SIM";
while (continuar.toUpperCase() === "SIM") {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"));
    let area = largura * comprimento;
    alert("A área do " + nome + " é: " + area);
    areaTotal += area;
    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)");
}
alert("A área total da residência é: " + areaTotal);