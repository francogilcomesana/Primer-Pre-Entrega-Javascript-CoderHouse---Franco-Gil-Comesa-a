let nombreUsuario = prompt("Ingrese su nombre:");

alert(`Bienvenido/a, ${nombreUsuario}! a Simplifier Exchange.`);

// Tasas de cambio
const tasasDeCambio = {
  USD: 1,    // Dólar estadounidense
  EUR: 0.83, // Euro
  ARS: 475, // Pesos Argentinos
  BRL: 5, // Real Brasilero
};

// Bucle while para hacer múltiples conversiones
let convertirDeNuevo = true;
while (convertirDeNuevo) {
  // Pedir al usuario los valores de conversión
  const monto = parseFloat(prompt("Ingrese el monto a convertir:"));
  const monedaOrigen = prompt("Ingrese la moneda de origen (por ejemplo, ARS):").toUpperCase();
  const monedaDestino = prompt("Ingrese la moneda de destino (por ejemplo, USD):").toUpperCase();

  // Realizar la conversión y mostrar el resultado
  const resultado = convertirDivisas(monto, monedaOrigen, monedaDestino, tasasDeCambio);
  alert(`${monto} ${monedaOrigen} = ${resultado} ${monedaDestino}`);

  // Preguntar al usuario si desea realizar otra conversión
  const deNuevo = prompt("¿Desea realizar otra conversión? (Sí o No)").toLowerCase();
  convertirDeNuevo = (deNuevo === "sí" || deNuevo === "si");
}

// Mostrar mensaje de despedida
alert("Gracias por utilizar Simplifier Exchange. ¡Hasta la proxima!");

// Función para realizar la conversión de divisas
function convertirDivisas(monto, monedaOrigen, monedaDestino, tasasDeCambio) {
  const tasaOrigen = tasasDeCambio[monedaOrigen];
  const tasaDestino = tasasDeCambio[monedaDestino];
  const tasaConversion = tasaDestino / tasaOrigen;
  const resultado = monto * tasaConversion;
  return resultado.toFixed(2);
}
