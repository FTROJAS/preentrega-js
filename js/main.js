const nombre = prompt ("ingrese su nombre")
const apellido = prompt ("ingrese su apellido")
const edad = parseInt(prompt("Hola, " + nombre + " Ingrese la edad"));



if (edad <18) {
        console.log("edad no permitida")
        alert("Bienvenido, " + nombre + ".La edad permitida es a partir de 18 (diesiocho) años");
    }

if (edad >18) {
    console.log("la cobertura para " + nombre + " es de $30.000" )

    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $30.000");
}
if (edad < 30) {
    console.log ("la cobertura para " + nombre + " es de $30.000" )
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $30.000");
}


if (edad  > 30) {
    console.log("la cobertura para " + nombre + " es de $65.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $65.000");
}
if (edad < 45) {
    console.log("la cobertura para " + nombre + " es de $65.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $65.000");
}


if (edad > 45) {
    console.log("la cobertura para " + nombre + " es de $100.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $100.000");
}

if (edad <65) {
    console.log("la cobertura para " + nombre + " es de $100.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $100.000");
}

if (edad >65 ) {
    console.log("la cobertura para " + nombre + " es de $150.000" );
    alert("Bienvenido, " + nombre + " analizando su edad le ofrecemos la mejor cobertura, con un monto de $150.000");
}


