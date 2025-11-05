// Arquivo: exercicio8.js
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// Testes
try {
  console.log(checkAge(-5)); // Lança InvalidAgeError
} catch (e) {
  console.log(e.message);
}
console.log(checkAge(30)); // → "Idade válida"
try {
  console.log(checkAge(200)); // Lança InvalidAgeError
} catch (e) {
  console.log(e.message);
}