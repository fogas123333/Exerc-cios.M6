// Arquivo: exercicio7.js
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    } else {
      throw error;
    }
  } finally {
    console.log("Parse attempt finished");
  }
}

// Testes
console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }, depois "Parse attempt finished"
console.log(safeParse('texto inválido'));     // → null, depois "Parse attempt finished"