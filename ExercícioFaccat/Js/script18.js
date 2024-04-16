// 18) Verificar se uma pessoa pode votar este ano
let anoAtual = prompt("Digite o ano atual:");
let anoNascimento = prompt("Digite o ano de nascimento:");
if (anoAtual - anoNascimento >= 18) {
    alert("A pessoa pode votar este ano.");
} else {
   alert("A pessoa não pode votar este ano.");
}