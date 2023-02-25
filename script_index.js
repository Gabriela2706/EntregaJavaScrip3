//FUNCION BIENVENIDA PERSONALIZADA + LOCAL STORAGE
//Quiero que este nombre me quede en el storage y tambien se escriba arriba de todo Antes del menu y diga todo el tiempo "Hola de nuevo..."
//Vamos a usar un localstorage para que quede grabado el saludo aun cuando se cierre la pagina y se vuelva a abrir.


function bienvenida() {
    let nombreCliente = " "
    let clienteHabitual = localStorage.getItem('usuario')
    let saludoCliente = document.getElementById('usuarioNuevo')
    saludoCliente.innerText = ("Hola de nuevo " + clienteHabitual + "...")



    if (clienteHabitual) {

        nombreCliente = clienteHabitual

    } else {

        Swal.fire({
            title: 'Bienvenidx a MONIND-SHOPS',
            text: 'Por favor, ingresa tu nombre',
            input: 'text',
        })
        nombreCliente = 
        // no se como capturar ese input que esta dentro del swal. Con prompt la funcionalidad era perfecta. 
        //Voy a dejar abajo como seria la funcion con el prompt.
        //De todas maneras se que como el swal tiene una estructura similar a la de un objeto o un constructor,
        //deberia usar el this.input para poder usar esta informacion afuera. Perdon profe, me gano JS.
        
        //nombreCliente = prompt("Bienvenidx a MONIND-SHOPS \n Por favor, ingresa tu nombre: ")

            localStorage.setItem('usuario', nombreCliente)
    }


}

bienvenida()

//------------
// EVENTO CLICK PARA EXPLICAR CONDICIONES DE COMPRA. 

let compraMayor = document.getElementById("xmayor")
let compraComision = document.getElementById("xcomision")
let compraMenor = document.getElementById("xmenor")

compraMayor.addEventListener("click", condicionesXMayor)
compraComision.addEventListener("click", condicionesXComision)
compraMenor.addEventListener("click", condicionesXMenor)

function condicionesXMayor() {

    swal({

        title: "La compra por MAYOR tiene las siguientes condiciones:",
        text: "-Minimo 10 prendas/articulos por marca \n -Envio a cargo del cliente y transporte a convenir",
        icon: "info",
        button: "Comprar x Mayor",

    }
    );
}

function condicionesXComision() {

    swal({
        title: "La compra por COMISION tiene las siguientes condiciones:",
        text: "- Minimo 20 prendas/articulos (Min 5 x marca) \n - Envio a cargo del cliente y transporte a convenir",
        icon: "info",
        button: "Comprar x Comision"
    });
}

function condicionesXMenor() {

    swal({
        title: "La compra por MENOR tiene las siguientes condiciones:",
        text: "- Sin minimos ni maximos de compra \n - Envio sin cargo para compras mayores a $25000",
        icon: "info",
        button: "Comprar x Menor"

    }
    )


}

