let idade = parseInt(prompt("Digite um número"));
if (idade < 16) {
    alert("A pessoa é menor e não pode votar!");
} else
    if (idade < 18) {
        alert("A pessoa é menor e voto opcional")
    } else {
        alert("A pessoa é maior de idade e voto obrigatório");
    }



    // se 1 teste, 1 caminho
    // se senao 1 teste, 2 caminhos
    // se senao se 2 testes,