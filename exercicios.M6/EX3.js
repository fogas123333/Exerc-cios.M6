// Dissertativo: Cenários onde não confiar em entrada do usuário.
// Sempre que o programa recebe dados externos, como formulários ou APIs, pois podem ser malformados ou maliciosos.
// Tratamento: Usar validações simples, como typeof para checar tipos (ex.: if (typeof input !== 'number') throw new Error('Número esperado')).
console.log("Cenários: Entradas de usuário via prompt ou formulários, pois podem ser strings em vez de números.");
console.log("Tratamento: Usar typeof para validar tipos e lançar erro se inválido.");