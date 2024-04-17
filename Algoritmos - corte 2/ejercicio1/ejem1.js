const denominations = [50000,20000,10000,5000, 2000, 1000]; 
/*Primero se define una varible const, la cual el valor es una array [] de 5 espacios, ya que se cuentan desde 0, 
aclarar que son numeros enteros*/


function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}
/*Se define una funcion la cual es obtener el monton obtenido, su cuerpo consta de una varible const
la cual permite guardar un valor que ingrese el usuario, el return devuelve la variable userInput 
convierte el valor ingresado por el usuario en la variable en un numero decimal con parsefloat*/ 


function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}
/*Se define una funcion la cual se llama `calcularBilletesNesesarios` y tiene un parametro el cual es `cantidad`
se establece un return, se usa la funcion map en la variable denominations (una array) y esta variable 
denominations continga una lista de denominaciones de valores. Dentro de denominations.map( se realiza una funcion 
flecha que identificamos por `=>` es una funcion para calcular los billetes necesarios y guardarla en una variable 
const) la funcion consta dividir la cantidad restante por la denominacion del billete (los valores en la array) y se 
y se utiliza Math.floor para redondear el numero para abajo y que quede en un numero entero.
Despues se actualiza la cantidad restante, restando (billetes necesarios * denominacion)
Ya despues con return se devuelve un arrays que contiene la cantidad de billetes nesesarios para cada denominacion
esto en el mismo orden el el que aparecian en denominations.*/


function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}
/*Se define una funcion la cual valida la cantidad del retiro, se establece un return que valida si amount es mayor a cero 
y si es un entero,  amount > 0 = true, al realizar amount % 1, verifica si el residuo es 1 o 0, por lo tanto si es 0, es 
un numero entero y es true, y al tener el operador && significa que la funcion devuelve el valor true ya que ambas 
operaciones son true.*/


function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }
//Se define una funcion de transaccion en cajero automatico, se establece una variable la cual es la cantidad del retiro
// y ahi se almacena el valor de el dinero que se desea retirar despues, se invoca una funcion que es la que valida la 
//cantidad de retiro, si la cantidad de retiro no es valida segun los criterios de la funcion isValidWithdrawalAmount 
//arroja alert("El monton solicitado no es valido") y hasta ahi llega, en caso de que no cumpla con la condicion, se cierra
//la funcion. 


  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);
//Llama una funcion la cual es calculateBilletsNeeded y calcula el parametro o argumento que se le da el cual es withdrawalAmount
// y realiza lo dicho anteriormente en esa funcion y el resultado se lo asigna a la variable billetsNeeded 


  alert("Para retirar $" + withdrawalAmount + ", necesitas:"); //En esta linea lo que hace es concatenar a withdrawalAmount en un string
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert(" " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}
//Se utiliza el método forEach del array denominations para iterar sobre cada elemento del array. Para cada elemento, 
//se ejecuta una función de flecha que toma parámetros o argumentos ()osea 2.
//comprueba el valor almacenado en la posición correspondiente del array billetsNeeded (que se calculó previamente) 
//con 0. Si el valor es mayor que 0, significa que se necesitan billetes de esa denominación.
//Ya por ultimo, concatena en un alert, la cantidad de billetes necesarios y el valor de la denominacion 

ATMTransaction();