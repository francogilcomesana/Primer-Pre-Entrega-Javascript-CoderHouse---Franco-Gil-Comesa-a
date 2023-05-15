// Pedir nombre de usuario
let nombreUsuario = prompt("Ingrese su nombre:");
alert(`Bienvenido/a, ${nombreUsuario}! a Simplifier Exchange.`);

// Arreglo de objetos con información de las divisas
const infoDivisas = [
  { divisa: "USD", pais: "Estados Unidos", precio: 1 },
  { divisa: "EUR", pais: "Unión Europea", precio: 1 },
  { divisa: "ARS", pais: "Argentina", precio: 475 },
  { divisa: "BRL", pais: "Brasil", precio: 5 }
];

// Mostrar información de las divisas
alert("Información de las divisas disponibles:");
for (const divisa of infoDivisas) {
  alert(`${divisa.divisa} (${divisa.pais}) - 1 ${divisa.divisa} = ${divisa.precio} USD`);
}

// Bucle while para hacer más de una conversión
let convertirDeNuevo = true;
while (convertirDeNuevo) {

  // Pedir al usuario los valores de conversión
  let montoValido = false;
  let monto;
  while (!montoValido) {
    const montoIngresado = prompt("Ingrese el monto a convertir:");
    monto = parseFloat(montoIngresado);
    if (!isNaN(monto)) {
      montoValido = true;
    } else {
      alert("El monto ingresado no es válido. Por favor, ingrese un número válido.");
    }
  }

  let monedaOrigenValida = false;
  let monedaOrigen;
  while (!monedaOrigenValida) {
    monedaOrigen = prompt("Ingrese la moneda de origen (por ejemplo, ARS):").toUpperCase();
    const divisaEncontrada = infoDivisas.find(d => d.divisa === monedaOrigen);
    if (divisaEncontrada) {
      monedaOrigenValida = true;
    } else {
      alert("La moneda de origen ingresada no es válida. Por favor, ingrese una moneda válida.");
    }
  }

  let monedaDestinoValida = false;
  let monedaDestino;
  while (!monedaDestinoValida) {
    monedaDestino = prompt("Ingrese la moneda de destino (por ejemplo, USD):").toUpperCase();
    const divisaEncontrada = infoDivisas.find(d => d.divisa === monedaDestino);
    if (divisaEncontrada) {
      monedaDestinoValida = true;
    } else {
      alert("La moneda de destino ingresada no es válida. Por favor, ingrese una moneda válida.");
    }
  }

  // Obtener la tasa de conversión
  const tasaOrigen = infoDivisas.find(d => d.divisa === monedaOrigen).precio;
  const tasaDestino = infoDivisas.find(d => d.divisa === monedaDestino).precio;
  const tasaConversion = tasaDestino / tasaOrigen;

  // Realizar la conversión y mostrar el resultado
  const resultado = monto * tasaConversion;
  alert(`${monto} ${monedaOrigen} = ${resultado} ${monedaDestino}`);

  // Pedir al usuario si quiere ver información completa de alguna de las divisas
  const verInfo = prompt("¿Desea ver información completa de alguna divisa? (Sí o No)").toLowerCase();
  if (verInfo === "sí" || verInfo === "si") {
    const divisaSeleccionada = prompt("Ingrese el código de la divisa que desea ver (por ejemplo, USD):").toUpperCase();
    const informacionDivisa = infoDivisas.filter(d => d.divisa === divisaSeleccionada);
    if (informacionDivisa.length > 0) {
      alert(`Información completa de la divisa ${divisaSeleccionada}:\n${informacionDivisa[0].pais} - 1 ${divisaSeleccionada} = ${informacionDivisa[0].precio} USD`);
    } else {
      alert(`La divisa ${divisaSeleccionada} no se encuentra en la lista de divisas disponibles.`);
    }
  }

  // Preguntar al usuario si quiere hacer otra conversión
  const deNuevo = prompt("¿Desea realizar otra conversión? (Sí o No)").toLowerCase();
  convertirDeNuevo = (deNuevo === "sí" || deNuevo === "si");
}

// Mensaje de despedida
alert("Gracias por utilizar Simplifier Exchange. ¡Hasta la próxima!");
