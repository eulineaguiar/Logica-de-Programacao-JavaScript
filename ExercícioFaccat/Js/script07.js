// 7) Converter idade de anos, meses e dias para dias
let anos = prompt("Digite a quantidade de anos:");
let meses = prompt("Digite a quantidade de meses:");
let dias = prompt("Digite a quantidade de dias:");
let idadeEmDias = (anos * 365) + (meses * 30) + parseInt(dias);
alert("A idade em dias é: " + idadeEmDias);