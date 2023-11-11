let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número Tchuco: ", function(numeroLimite) {
    numeroLimite = parseInt(numeroLimite);

    let primeiroNumero = 0;
    let segundoNumero = 1;
    let fibonacci = [primeiroNumero, segundoNumero];

    while (segundoNumero <= numeroLimite) {
        var proximoNumero = primeiroNumero + segundoNumero;
        fibonacci.push(proximoNumero);
        primeiroNumero = segundoNumero;
        segundoNumero = proximoNumero;
    }

    console.log("A Sequência de Fibonacci vai até  " + numeroLimite + ":");
    console.log(fibonacci.join(', '));

    rl.close();
});
