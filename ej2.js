function eliminarUltimosTres(arreglo) {
  if (arreglo.length < 5) {
    console.log("Error: El arreglo debe tener al menos 5 elementos.");
    return arreglo;
  }

  return arreglo.slice(0, arreglo.length - 3);
}
