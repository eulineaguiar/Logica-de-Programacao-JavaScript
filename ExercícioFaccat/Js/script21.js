// 21) Calcular a duração de um jogo de Xadrez
let horaInicio = prompt("Digite a hora de início do jogo:");
let horaFim = prompt("Digite a hora de fim do jogo:");
let duracao;
if (horaFim >= horaInicio) {
    duracao = horaFim - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFim;
}
alert("A duração do jogo em horas é: " + duracao);