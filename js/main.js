function saludo() {
    alert("Bienvenido!!");
}

function suma() {
    //Declaramos las variables necesarias
    let a = 0;
    let b = 0;
    let suma = 0;

    alert("Este algoritmo realiza la suma de dos valores ingresados por usted");
    //solicitar valores
    a = parseInt(prompt("Ingrese el primer valor a sumar"));
    b = parseInt(prompt("Ingrese el segundo valor a sumar"));
    //realizar la operacion
    suma = a + b;
    //mostrar resultados
    alert("La respuesta es: " + suma);
}

function operacionesBasicas() {
    let a = 0;
    let b = 0;
    let restar = 0;
    let multiplicar = 0;
    let dividir = 0;
    let elegir = 0;

    alert("Este algoritmo busca ayudarlo a restar, multiplicar o dividir los valores ingresados por usted");

    elegir = parseInt(prompt("Si desea restar eliga 1, si desea multiplicar eliga 2 o si desea dividir eliga 3"));

    if (elegir == 1) {
        a = parseInt(prompt("Ingrese el primer numero"));
        b = parseInt(prompt("Ingrese el segundo numero"));

        restar = a - b;

        alert("La respuesta es: " + restar);
    } else if (elegir == 2) {
        a = parseInt(prompt("Ingrese el primer numero"));
        b = parseInt(prompt("Ingrese el segundo numero"));

        multiplicar = a * b;

        alert("La respuesta es: " + multiplicar);
    } else {
        a = parseInt(prompt("Ingrese el primer numero"));
        b = parseInt(prompt("Ingrese el segundo numero"));

        dividir = a / b;

        alert("La respuesta es: " + dividir);
    }
    
}

function numeroAlCuadrado() {
    let a = 0;
    let cuadrado = 0;

    alert("Este algoritmo lo utilizara para encontrar el cuadrado del valor que ingreso");

    a = parseInt(prompt("Ingrese el numero para saber el cuadrado"));

    cuadrado = a * a;
    
    alert("El numero al cuadrado de " + a + " es: " + cuadrado);
}

function areaTriangulo() {
    let base = 0;
    let altura = 0;
    let = area = 0;

    alert("Este algoritmo servira para conocer el area de un triangulo");

    base = parseInt(prompt("Ingrese la base del triangulo"));
    altura = parseInt(prompt("Ingrese la altura del triangulo"));

    area = (base * altura)/2;

    alert("El area del triangulo es: " + area);
}

function numeroMayor() {
    let a, b = 0;

    //alert("");

    a = parseInt(prompt("Ingrese el prmer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));

    if (a == b) {
        alert("Los valores ingresados son iguales");
    } else if (a > b) {
        alert(a + " es mayor a " + b);
    } else {
        alert(b + " es mayor a " + a);
    }
}

function unidadesMedidas() {
    let a = 0;
    let kilometros = 0;
    let pies = 0;
    let pulgadas = 0;

    alert("Con este algoritmo, se le dara a conocer la medida ingresada (en metros) a kilometros, pies, pulgadas");

    a = parseInt(prompt("Ingrese el valor que desea convertir"));

    kilometros = a/1000;
    pies = a * 3,281;
    pulgadas = a * 39,37;

    alert("El metro ingresado es: " + a + "m\n"
        + "A continuacion se le dara a conocer las diferentes conversiones" + "\n"
        + "Kilometros: " + kilometros + "\n"
        + "Pies: " + pies + "\n"
        + "Pulgadas: " + pulgadas);
}

function unidadesTemperatura() {
    let a = 0;
    let kelvin = 0;
    let Fahrenheit = 0;

    alert("Con este algoritmo usted convertira los grados ingresados (°C) a kelvin (°K) y a Farenheit (°F)");

    a = parseInt(prompt("Ingrese el grado (°C) que quiere convertir"));

    kelvin = a - 273.15;
    Fahrenheit = (a * 1.8) + 32;

    alert("El graado ingresado es: " + a + "°C\n"
        + "A continuacion se le dara a conocer los grados en kelvin y en Fahrenheit\n" 
        + "Kelvin: " + kelvin + "\n"
        + "Fahrenheit: " + Fahrenheit);
}

function promedioEstudiante() {
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let promedio = 0;

    alert("Con este algoritmo usted sabra su promedio de notas y si ese promedio le alcanza para aprobar la materia o no.");

    nota1 = parseInt(prompt("Ingrese la primera nota"));
    nota2 = parseInt(prompt("Ingrese la segunda nota"));
    nota3 = parseInt(prompt("Ingrese la tercera nota"));
    nota4 = parseInt(prompt("Ingrese la cuarta nota"));
    nota5 = parseInt(prompt("Ingrese la quinta nota"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

    if (promedio == 6) {
        alert("Su nota promedio es: " + promedio + " usted aprobo con la nota minima");
    } else if (promedio > 6) {
        alert("Su nota promedio es: " + promedio + " usted aprobo la asignatura");
    } else {
        alert("Su nota es: " + promedio + " usted desaprobo la asignatura");
    }
}

function descuentoCompra() {
    let pesoFruta = 0;
    let totalAPagar = 0;
    let precio = 0;

    alert("Con este algoritmo usted sabra que descuento debe aplicar al numero de kilos correspondiente.");

    precio = parseInt(prompt("Ingrese el valor de su compra"));
    pesoFruta = parseInt(prompt("Ingrese el numero de kilos"));

    if (pesoFruta >= 10) {
        totalAPagar = precio - (precio * (20/100));
        alert("Usted recibira un descuento del 20% \n El total a pagar es: " + totalAPagar);
    } else if (pesoFruta > 6 && pesoFruta < 10) {
        totalAPagar = precio - (precio * (15/100));
        alert("Usted recibira un descuento del 15% \n El total a pagar es: " + totalAPagar);
    } else if (pesoFruta > 3 && pesoFruta < 5) {
        totalAPagar = precio - (precio * (10/100));
        alert("Usted recibira un descuento del 10% \n El total a pagar es: " + totalAPagar);
    } else {
        alert("Usted no recibira ningun descuento a su compra, \n El total a pagar es: " + precio);
    }
}

function parImpar() {
    let numero = 0;

    alert("Este algoritmo le ayudara a saber si el numero que digito es par o imapar");

    numero = parseInt(prompt("Digite un numero"));

    if (numero % 2 === 0) {
        alert(numero + " es par");
    } else {
        alert(numero + " es impar");
    }
}

function salarioHora() {
    let horaTrabajo = 0;
    let salarioARecibir = 0;
    let salarioSemanal = 10000;
    let horaExtra = 0;

    alert("Este algortimo le ayudara a saber cunato dinero recibira en una semana de trabajo");

    horaTrabajo = parseInt(prompt("Ingrese las horas que ha trabajado en la semana"));

    if (horaTrabajo == 0) {
        alert("Usted no trabajo esta semana");
    } else if (horaTrabajo <= 40 || horaTrabajo == 40) {
        salarioARecibir = salarioSemanal * horaTrabajo;
        alert("Usted trabajo menos de las 40 horas o las 40 horas en total \n Usted recibira: $" + salarioARecibir);
    } else {
        horaExtra = parseInt(prompt("Cuantas horas extra trabajo en la semana?"));
        salarioARecibir = 400000 + (20000 * horaExtra);
        alert("Usted trabajo " + horaExtra + " horas extra esta semana \n Usted recibira: $" + salarioARecibir);
    }
}

function menorDeTresNumeros() {
    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;

    alert("Este algoritmo le ayudara a saber cual de los tres numeros que ingreso es el menor");

    numero1 = parseInt(prompt("Ingrese el primer numero"));
    numero2 = parseInt(prompt("Ingrese el segundo numero"));
    numero3 = parseInt(prompt("Ingrese el tercer numero"));

    if (numero1 < numero2 && numero1 < numero2) {
        alert("El numero menor es: " + numero1);
    } else if (numero2 < numero1 && numero2 < numero3) {
        alert("El numero menor es: " + numero2);
    } else if (numero1 == numero2 && numero2 == numero3) {
        alert("Los numeros son iguales");
    } else {
        alert("El numero menor es: " + numero3);
    }
}