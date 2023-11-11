function converterCambio(cotacao, montante) {
  return Number(cotacao) * Number(montante);
}
const trembolona1 = 5.06;
const trembolona2 = 200;
const resultado = converterCambio(trembolona1, trembolona2);
console.log(resultado);
