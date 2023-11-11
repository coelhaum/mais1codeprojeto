let numeroAnterior = 0;
let numeroAtual = 1;
let sequenciaDePell = [numeroAnterior, numeroAtual];

for (let i = 2; i < 20; i++) {
    let proximoNumero = 2 * numeroAtual + numeroAnterior;
    sequenciaDePell.push(proximoNumero);
    numeroAnterior = numeroAtual;
    numeroAtual = proximoNumero;
}

console.log("Os 20 termos são:");
console.log(sequenciaDePell.join(", "));
