var numeroDeTermos = 10000000000; 

var pi = 0;
var sinal = 1;

for (var i = 0; i < numeroDeTermos; i++) {
    var termo = 1 / (2 * i + 1);
    pi += sinal * termo;
    sinal = -sinal; 
}

pi *= 4; 

console.log("Valor aproximado de π usando " + numeroDeTermos + " termos: " + pi);
