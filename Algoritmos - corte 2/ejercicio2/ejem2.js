//Se establecen arrays como varibles

const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations = {};


//Una variable de habitacion reservado la cual contendra los datos de numero de la habitacion y nombre 

const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);   //si la puede reservar
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);  //no la puede reservar
  }
};


//Una variable la cual servira para mostrar en numerlo de la habitacion que fue desocupada

const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};


//Una variable la cual permitira ver las habitaciones disponibles, si hay o no.

const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};


//Esta variable mostrara el numero de habitaciones y cuantas estan ocupadas

const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {     //En una funcion flecha se establecen las habitaciones desocupadas
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {   //En una funcion flecha se establecen las habitaciones reservadas
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};


//Se establce una funcion flecha llamada handleuserInput

const handleUserInput = () => {
  let userInput;        //Se declara la variable userInput
  do {   //Se utiliza un ciclo do while pra que el bloque se repita al menos una vez, y se repite mientras userInput no sea igual a "4"
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');   //la opcion seleccionada por el usuario se almacena en la variable userInput

    switch (userInput) {    //Se establece un switch para ver los diferentes casos de la variable userInput
     
      case '1': //Reserva la habitacion
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
     
        case '2': //libera una habitacion
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      
        case '3':  //consulta la ocupacion
        showOccupancy();
        break;
      
        case '4':   //Es para salir 
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.'); //Se muestra si no es ni 1,2,3 o 4
        break;
    }
  } while (userInput !== '4');   //El ciclo se continua ejecutando hasta que userInput sea igual a "4"
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();