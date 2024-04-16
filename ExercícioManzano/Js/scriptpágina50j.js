// j) Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. (Página 50)
let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));
let quociente = 0;
while (dividendo >= divisor) {
    dividendo -= divisor;
    quociente++;
}
alert("O quociente da divisão é: " + quociente);