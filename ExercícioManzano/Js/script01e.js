// e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. (páginas 46 e 47)
let base = 3;
let i = 0;
while (i <= 15) {
    let resultado = 1;
    let j = 0;
    while (j < i) {
        resultado *= base;
        j++;
    }
    alert("3 elevado a " + i + " = " + resultado);
    i++;
}