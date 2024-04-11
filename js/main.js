const nombre = prompt ("ingrese su nombre")
const apellido =prompt ("ingrese su apellido")



const edad=(prompt("Hola, " + nombre + " Ingrese la edad"));

function datos(saludo){
    console.log(saludo)
}

datos("Bienvenido, Los datos del usuario son:")

console.log(nombre+ " "+ apellido+ ", "+ edad +" de edad.")


while (edad<18 && edad<30 && edad<45 && edad<65) {
    alert("Bienvenido, " + nombre + " .La edad permitida es a partir de 18 (diesiocho) años");
    console.log("edad no permitida")
    console.log("fin del programa")
    alert("fin del programa")
    
}




if(edad<30) {
    console.log("la cobertura para " + nombre + " es de $30.000" )

    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $30.000");
    console.log ("fin del programa")
    alert ("fin del programa")
}


else if(edad<45) {
    console.log("la cobertura para " + nombre + "es de $65.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $65.000");
    console.log ("fin del programa")
    alert ("fin del programa")
}


else if(edad<65) {
    console.log("la cobertura para " + nombre + "es de $100.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $100.000");
    console.log ("fin del programa")
    alert ("fin del programa")
}

else {
    console.log("la cobertura para " + nombre + "es de $150.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $150.000");
    console.log ("fin del programa")
    alert ("fin del programa")
    }
    

