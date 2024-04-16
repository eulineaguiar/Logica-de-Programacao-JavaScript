// 23) Peso Ideal
nome = prompt("Digite o nome da pessoa: ");
altura = parseFloat(prompt("Digite a altura da pessoa (em metros): "));
sexo = prompt("Digite o sexo da pessoa (M para masculino ou F para feminino): ");

if (sexo == "M") {
    peso_ideal = (72.7 * altura) - 58;
} else {
    peso_ideal = (62.1 * altura) - 44.7;
}

alert("O peso ideal de " + nome + " é " + peso_ideal + " kg.");