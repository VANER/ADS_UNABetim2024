// Calculadora em JavaScript

// Função de adicão
function soma(a, b) {
  return a + b;
}

// Função de Subitração
function menos(a, b) {
  return a - b;
}

// Função de Mutiplicação
function multi(a, b) {
  return a * b;
}

// Função de Divisão
function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

// Exemplo de uso
console.log("10 + 2 =", add(5, 3));
console.log("10 - 2 =", subtract(5, 3));
console.log("10 * 2 =", multiply(5, 3));
console.log("10 / 2 =", divide(5, 3));

