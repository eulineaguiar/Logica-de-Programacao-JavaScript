// l) Ler o nome e o sexo de uma pessoa e apresentar uma mensagem de saudação. (páginas 41 e 42)
let nome = prompt("Digite o seu nome:");
let sexo = prompt("Digite o seu sexo (M para masculino, F para feminino):");
if (sexo.toUpperCase() === "M") {
    alert("Ilmo Sr. " + nome);
} else if (sexo.toUpperCase() === "F") {
    alert("Ilma Sra. " + nome);
} else {
    alert("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
}