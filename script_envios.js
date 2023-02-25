/*FUNCION PARA LA ELECCION DE ENVIOS*/


const zonaElegida = document.getElementById ("zonaElegida")
const btnEnvio = document.getElementById ("btnEnvio")


btnEnvio.addEventListener ("click", envio)

 let envioCaba = "La zona seleccionada es CABA y el envio esta bonificado"
 let envioOeste = "La zona seleccionada es Zona Oeste y el envio cuesta $1500"
 let envioSur = "La zona seleccionada es Zona Sur y el envio cuesta $1800"
 let envioNorte = "La zona seleccionada es Zona Norte y el envio cuesta $1600"
 let envioInterior = "La zona ingresada es alguna provincia que no sea Buenos Aires y el costo del envio depende del la empresa transportista"


 function envio() {
    const zonaEnvio = zonaElegida.value 
    
    if (zonaEnvio == "CABA") {
        console.log (envioCaba)
    } else if (zonaEnvio == "OESTE") {
        console.log (envioOeste)
    } else if (zonaEnvio == "SUR") {
        console.log (envioSur)
    } else if (zonaEnvio == "NORTE") {
        console.log (envioNorte)
    } else if (zonaEnvio == "INTERIOR") {
        console.log (envioInterior)
    } else {
        console.log("Ingresa una zona valida")
    }
}

//ME FALTA PULIR LA IDEA. SOLO PUDE MOSTRAR POR CONSOLA LA INFORMACION QUE SE EJECUTA CON EL DOM.
//LA IDEA ES QUE EL CLIENTE PUEDA SABER CUANTO LE VA A SALIR EL ENVIO SEGUN SU ZONA. 
//IDEALMENTE CUANDO VI LA CLASE DE API´s PENSE EN AGREGAR LA BASE DE DATOS DEL CORREO ARGENTINO, 
//PERO MIS IDEAS VAN MAS RAPIDO QUE MIS CONOCIMIENTOS JAJA. NO LO SABRIA HACER.


