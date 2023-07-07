function findUniq(arreglo) {
  const frecuencias = {};

  for (let i = 0; i < arreglo.length; i++) {
    const numero = arreglo[i];

    if (frecuencias[numero]) {
      frecuencias[numero]++;
    } else {
      frecuencias[numero] = 1;
    }
  }

  for (const numero in frecuencias) {
    if (frecuencias[numero] === 1) {
      return parseInt(numero);
    }
  }
}
