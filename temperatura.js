const prompt = require('prompt-sync')();
centinela = true;

while(centinela){

    console.log("¡Bienvenido! - sistema de conversión de temperatura");
    temperature = prompt("Por favor ingrese la temperatura en grados Celsius: ");
    Number(temperature);

    if (temperature === "") {
        console.log("ingresaste un valor vacío");

    }
    else{
        if (isNaN(temperature)) {
            console.log("Ingresa un valor numerico");
        }
        else{
            // Convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
            Fahrenheit = ((temperature *9)/5)+32
            Kelvin = temperature + 273.15
            console.log(`La temperatura convertida a grados Fahrenheit es de: ${Fahrenheit}`);
            console.log(`La temperatura convertida a grados kELVIN es de: ${Kelvin}`);
            centinela = false;

        }

    }
}