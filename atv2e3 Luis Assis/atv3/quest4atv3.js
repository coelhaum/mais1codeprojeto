function isPrimo(numero) {
 let qtdDivisivel = 0
  
 for (let i = 1; i <= numero; i++) { 
    if (numero % i === 0 ) { 
        qtdDivisivel++;
    }
  }

if (qtdDivisivel === 2) {
    return true;
} else {
    return false;
     }
}

let produto = 1
for ( let i = 1; i <= 20; i++) {
    if(isPrimo(i)) {
        produto *= i;
    }
}

console.log( " O produto dos primos de 1 a 20 é: " + produto)

