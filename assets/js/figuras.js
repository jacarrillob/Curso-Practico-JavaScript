// alert("Hola mundo");


// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(lado) {
    return lado * 4;
} 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm");
// console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángulo

console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// console.log("Los lados del triangulo miden: "
//              + ladoTriangulo1 + " cm, " 
//              + ladoTriangulo2 + " cm y " 
//              + baseTriangulo + " cm");

// console.log("La altura del Triangulo es: "+ alturaTriangulo + " cm");
// console.log("El perimetro del Triangulo es: "+ perimetroTriangulo + " cm");
// console.log("El área del Triangulo es: "+ areaTriangulo + " cm^2");

console.groupEnd();

// Código del cículo

console.group("Círculo");
// Radio
// const radioCirculo = 4;

// Diametro
// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Areea
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El radio del Circulo es: "+ radioCirculo + " cm");
// console.log("El diametro del Circulo es: "+ diametroCirculo + " cm");
// console.log("El valor de PI es: "+ PI);
// console.log("El perimetro del Circulo es: "+ perimetroCirculo + " cm");
// console.log("El área del Circulo es: "+ areaCirculo + " cm^2");


console.groupEnd();


// Aqui integramos con el HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


// Reto crear funciones para el triangulo y Circulo