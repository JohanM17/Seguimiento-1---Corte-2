//Establecer arrays para representar los asientos de las dos salas de cine

const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

//Establecer unas variables para llevar el seguimiento del dinero recaudado en cada sala

let dineroSala1 = 0;
let dineroSala2 = 0;

//Función para mostrar la disponibilidad de asientos en las 2 salas

function verDisponibilidad() {

  //Mostrar disponibilidad de asientos para la Sala de cine 1

  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));

  //Mostrar disponibilidad de asientos para la Sala de cine 2
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

//Función para reservar un asiento en la sala de cine que seleccione el usuario 
function reservarAsiento() {
  //Solicitar por medio de un prompt al usuario que ingrese el numero de sala

  const sala = prompt("Ingresa el número de la sala (1 o 2)");

  //Solicitar que tambien ingrese el numero de asiento y lo volvemos un numero entero

  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  // Verifica que si sean validos tanto la sal como el asiento

  if ((sala === "1" || sala === "2") && asiento >= 0 && asiento < 10) {

    // Verificar si el asiento está disponible y reservarlo

    if (sala === "1" && !sala1[asiento]) {
      sala1[asiento] = true;
      dineroSala1 += 10; // Agregar el costo de la boleta al dinero recaudado en la Sala 1
      alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
    } else if (sala === "2" && !sala2[asiento]) {
      sala2[asiento] = true;
      dineroSala2 += 10; // Agregar el costo de la boleta al dinero recaudado en la Sala 2
      alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
    } else {
      alert("El asiento ya está reservado.");
    }
  } else {
    alert("Número de sala o asiento inválido. Intenta de nuevo.");
  }
}

// Función para verificar la disponibilidad de asientos libres y ver la película en la sala seleccionada


function verPelicula() {
  // Solicitar al usuario el número de sala para ver la película

  const sala = prompt("Ingresa el número de la sala (1 o 2)");

  // Contar el número de asientos libres en la sala seleccionada

  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento).length : sala2.filter(asiento => !asiento).length;

  // Mostrar mensaje dependiendo de la disponibilidad de asientos libres

  if (asientosLibres > 0) {
    alert(`Hay ${asientosLibres} asientos libres en la sala ${sala}.`);
    alert("¡Disfruta de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Función para mostrar el balance del dinero recaudado en ambas salas

function verBalance() {
  const totalDinero = dineroSala1 + dineroSala2;
  alert(`Dinero recaudado en Sala 1: $${dineroSala1}`);
  alert(`Dinero recaudado en Sala 2: $${dineroSala2}`);
  alert(`Dinero recaudado en total: $${totalDinero}`);
}

// Bucle while para mostrar el menú y manejar las opciones seleccionadas por el usuario

while (true) {
  const opcion = prompt("Bienvenido a la sala de cine\nSelecciona una opción:\n1. Ver disponibilidad de asientos\n2. Reservar asiento\n3. Ver ocupación sala\n4. Ver balance\n5. Salir");

  // Por medio de un switch anidado en un while se maneja la opción seleccionada por el usuario

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
      return; // Se utiliza 'return' para poder salir del bucle y que finalice el recorrido
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}