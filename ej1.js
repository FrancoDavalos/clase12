function eliminarPrimerElemento(arreglo) {
  if (arreglo.length === 0) {
    return arreglo; 
  }

  return arreglo.slice(1);
}
