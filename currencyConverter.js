const readline = require("readline");

// Configura la interfaz readline para capturar la entrada del usuario desde la terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Mensaje de bienvenida y explicación.
console.log("Bienvenido al convertidor de moneda.");
console.log(
  "Este programa convierte dólares a euros utilizando una tasa de cambio fija (1 dólar = 0.85 euros).\n"
);

// Captura la cantidad en dólares que el usuario desea convertir.
rl.question("Ingrese la cantidad en dólares: ", function (cantidadDolares) {
  // Convierte la cantidad en dólares a euros utilizando la tasa de cambio fija.
  const tasaCambio = 0.85;
  const cantidadEuros = cantidadDolares * tasaCambio;

  // Muestra el resultado de la conversión.
  console.log(
    `\n${cantidadDolares} dólares son equivalentes a ${cantidadEuros} euros.`
  );

  // Cierra la interfaz readline.
  rl.close();
});

// Maneja el evento de cierre de la interfaz readline.
rl.on("close", function () {
  console.log("\nGracias por usar el convertidor de moneda. ¡Hasta luego!");
});
