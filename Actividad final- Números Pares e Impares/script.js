function pedirNumero() { // Función para pedirle al usuario el número entero positivo
    let numero;
    do {
      numero = parseInt(prompt("Ingresa un número entero positivo:")); 
    } while (isNaN(numero) || numero <= 0); // Verifica si el número no es un número válido o es menor o igual a cero
    return numero; // Devuelve el número válido ingresado por el usuario
  }
  
  function esPar(numero) {  // Función para determinar si un número es par
    return numero % 2 === 0; // Verifica si el número es divisible por 2
  }
  
  function mostrarNumeros(numero) { // Función para mostrar los números pares e impares hasta el numero ingresado por el usuario
    console.log("Números pares:"); 
    for (let i = 2; i <= numero; i += 2) { 
      if (esPar(i)) { // Verifica si el número actual es par utilizando la función esPar()
        console.log(i); 
      }
    }
  
    console.log("Números impares:"); 
    for (let i = 1; i <= numero; i += 2) { 
      if (!esPar(i)) { // Verifica si el número actual no es par utilizando la función esPar()
        console.log(i); 
      }
    }
  }
  
  function start() {
    const numero = pedirNumero(); // Solicita el número entero positivo al usuario usando la función pedirNumero()
    mostrarNumeros(numero); // Muestra por consola los números pares e impares utilizando la función mostrarNumeros()
  }
  
  start(); // Ejecutar el programa
