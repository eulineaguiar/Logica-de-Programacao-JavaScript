// 38) Algoritmo para verificar o código do usuário e a senha
function verificarAcesso() {
    const codigoCorreto = 1234;
    const senhaCorreta = 9999;

    let codigo = parseInt(prompt("Digite o código:"));
    let senha = parseInt(prompt("Digite a senha:"));

    if (codigo !== codigoCorreto) {
        alert('Usuário inválido!');
    } else if (senha !== senhaCorreta) {
        alert('Senha incorreta');
    } else {
        alert('Acesso permitido');
    }
}

verificarAcesso();