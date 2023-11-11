function calcularIndiceDeMassaCorporea(a, b) {
  return Number(a) / Math.pow(Number(b), 2);
}
const borboleto1 = 87;
const borboleto2 = 1.75;
const resultado = calcularIndiceDeMassaCorporea(borboleto1, borboleto2);
console.log(resultado);