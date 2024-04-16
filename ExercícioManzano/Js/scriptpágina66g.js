// g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. (Página 66)
let base = 3;
for (let i = 0; i <= 15; i++) {
    let resultado = 1;
    for (let j = 0; j < i; j++) {
        resultado *= base;
    }
    alert("3 elevado a " + i + " = " + resultado);
}