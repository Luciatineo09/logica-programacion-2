const prompt = require('prompt-sync')();

console.log("¡Bienvenido! - sistema de conversión de temperatura");
temperature = prompt("Por favor ingrese la temperatura en grados Celsius: ");


if (temperature === "") {

    console.log("ingresaste un valor vacío");
}
else{
    if (typeof(temperature)==Number) {
        // Convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
        Fahrenheit = ((temperature *9)/5)+32
        Kelvin = (temperature+273.15)
        console.log(`La temperatura convertida a grados Fahrenheit es de: ${Fahrenheit}`);
        console.log(`La temperatura convertida a grados kELVIN es de: ${Kelvin}`);
    }
    else{
        console.log("Ingresa un valor numerico");
    }
    
}