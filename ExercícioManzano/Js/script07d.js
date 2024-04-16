// Exercício 7 - d) Calcular a quantidade de litros de combustível gasta em uma viagem (páginas 25 e 26)
function calcularCombustivelGasto() {
    let tempo = parseFloat(prompt("Insira o tempo gasto na viagem (em horas):"));
    let velocidadeMedia = parseFloat(prompt("Insira a velocidade média durante a viagem (em km/h):"));
    let distancia = tempo * velocidadeMedia;
    let litrosUsados = distancia / 12;
    alert("A viagem teve uma velocidade média de " + velocidadeMedia + " km/h e durou " + tempo + " horas. A distância percorrida foi de " + distancia + " km e foram utilizados " + litrosUsados + " litros de combustível.");
}

calcularCombustivelGasto();