function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista2 = [100, 200, 500, 400000000];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista2.length)) {
  const elem1 = lista2[mitadLista2 - 1];
  const elem2 = lista2[mitadLista2];
  const promedioElements = calcularMediaAritmetica([elem1, elem2]);
  mediana = promedioElements;
} else {
  mediana = lista2[mitadLista2];
}
