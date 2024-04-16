// j) Ler um valor entre 1 e 9 e indicar se está na faixa permitida. (páginas 41 e 42)
let valor = parseInt(prompt("Digite um valor:"));
if (valor >= 1 && valor <= 9) {
    alert("O valor está na faixa permitida.");
} else {
    alert("O valor está fora da faixa permitida.");
}