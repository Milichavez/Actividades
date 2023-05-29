let tries = 3;

function randomNumber() {
  let max = 100;
  let min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validNumberQuantity(number) {
  if (number >= 1 && number <= 100) return true;
  return false;
}

function validateNumber(number) {  // Funcionalidad adicional para validar el número ingresado
  if (isNaN(number) || !validNumberQuantity(number)) {
    console.log('El número no es válido');
    return false;
  }
  return true;
}

function promptFirstNumber() {
  let number = prompt('Ingrese un número. Tienes ' + tries + ' intentos');
  number = parseInt(number);
  if (!validateNumber(number)) { // Utilizamos la función validateNumber para validar el número ingresado
    return promptFirstNumber(); // Se llama nuevamente a la función para obtener un número válido sin perder el intento
  }
  return number;
}

function victory(number) {
  alert(`¡Acertaste! El número era: ${number}`);
}

function defeat(number) {
  alert(`¡Perdiste! El número era: ${number}`);
}

function promptNumberLessThanRandomNumber(thisTries) {
  let number = prompt(`El número a encontrar es mayor. Ingrese nuevamente un número. Te quedan ${thisTries}`);
  number = parseInt(number);
  if (!validateNumber(number)) {
    return promptNumberLessThanRandomNumber(thisTries); // Se llama nuevamente a la función para obtener un número válido sin perder el intento
  }
  return number;
}

function promptNumberGreaterThanRandomNumber(thisTries) {
  let number = prompt(`El número a encontrar es menor. Ingrese nuevamente un número. Te quedan ${thisTries}`);
  number = parseInt(number);
  if (!validateNumber(number)) {
    return promptNumberGreaterThanRandomNumber(thisTries); // Se llama nuevamente a la función para obtener un número válido sin perder el intento
  }
  return number;
}

function game() {
  const findNumber = randomNumber();
  let number = promptFirstNumber();
  console.log('findNumber: ', findNumber);
  console.log('number: ', number);
  for (let i = 1; (i <= tries || number === findNumber); i++) {
    if (number === findNumber) break;
    if (number < findNumber) number = promptNumberLessThanRandomNumber(tries - i);
    else number = promptNumberGreaterThanRandomNumber(tries - i);
  }
  if (findNumber === number) victory(findNumber);
  else defeat(findNumber);
}

game();
