function calcularJurosCompostos(valor, taxa, anos) {
  return Number(valor) * Number(taxa) * Number(anos) + Number(valor);
}
const coiso1 = 100;
const coiso2 = 3 / 100;
const coiso3 = 20;
const resultado = calcularJurosCompostos(coiso1, coiso2, coiso3);
console.log(resultado);