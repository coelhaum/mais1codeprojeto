let numeroAtual = 1;
let numeroAnterior = 1;

while (numeroAtual <= 1000) {
  console.log(numeroAtual);
  let proximoNumero = numeroAtual + numeroAnterior;
  numeroAnterior = numeroAtual;
  numeroAtual = proximoNumero;
}
console.log(numeroAtual);