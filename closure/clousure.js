function criarContador() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}

const contador = criarContador();

console.log(contador());