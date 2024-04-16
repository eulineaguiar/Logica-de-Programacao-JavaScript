// 8) Calcular o percentual de votos em relação ao total de eleitores
let totalEleitores = prompt("Digite o total de eleitores:");
let votosBrancos = prompt("Digite o número de votos brancos:");
let votosNulos = prompt("Digite o número de votos nulos:");
let votosValidos = prompt("Digite o número de votos válidos:");
alert("Percentual de votos brancos: " + (votosBrancos / totalEleitores) * 100 + "%");
alert("Percentual de votos nulos: " + (votosNulos / totalEleitores) * 100 + "%");
alert("Percentual de votos válidos: " + (votosValidos / totalEleitores) * 100 + "%");