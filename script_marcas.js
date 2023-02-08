
// OBJETO CONSTRUCTOR + DOM + EVENTOS DOBLECLICK EN PAGINA "MARCAS"

class Nissie {
    constructor(clasificacion, nombre, temporada, color, material, oferta) {

        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.temporada = temporada;
        this.color = color;
        this.material = material;
        this.oferta = oferta;

    }
}

const jeanNissie01 = new Nissie("Jean", "Electra", "Verano 2022", "Blanco", "Jean liso", false)
const jeanNissie02 = new Nissie("Jean", "Cleo", "Verano 2022", "Azul Francia", "Jean batik", false)
const jeanNissie03 = new Nissie("Jean", "Alexa", "Verano 2022", "Celeste", "Jean veteado", false)
const shortNissie01 = new Nissie("Short", "Minnie", "Verano 2022", "Blanco", "Gabardina elastizada", false)
const shortNissie02 = new Nissie("Short", "Malibu", "Verano 2022", "Negro", "Gabardina", true)
const shortNissie03 = new Nissie("Short", "Regina", "Verano 2021", "Gris", "jean liso", true)
const polleraNissie01 = new Nissie("Pollera", "Flora", "Verano 2022", "Lunares", "Modal y Algodon", false)
const polleraNissie02 = new Nissie("Pollera", "Pola", "Verano 2022", "Verde Manzana", "Gabardina", false)

class LasLocas {
    constructor(clasificacion, nombre, temporada, color, material, oferta) {

        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.temporada = temporada;
        this.color = color;
        this.material = material;
        this.oferta = oferta;

    }
}

const jeanLasLocas01 = new LasLocas("Jean", "JLoca01", "Verano 2022", "Blanco", "Jean liso", false)
const jeanLasLocas02 = new LasLocas("Jean", "JLoca02", "Verano 2022", "Azul Francia", "Jean batik", false)
const jeanLasLocas03 = new LasLocas("Jean", "JLoca03", "Verano 2022", "Celeste", "Jean veteado", false)
const shortLasLocas01 = new LasLocas("Short", "ShLoca01", "Verano 2022", "Blanco", "Gabardina elastizada", false)
const shortLasLocas02 = new LasLocas("Short", "ShLoca02", "Verano 2022", "Negro", "Gabardina", true)
const shortLasLocas03 = new LasLocas("Short", "ShLoca03", "Verano 2021", "Gris", "jean liso", true)
const polleraLasLocas01 = new LasLocas("Pollera", "PoLoca01", "Verano 2022", "Lunares", "Modal y Algodon", false)
const polleraLasLocas02 = new LasLocas("Pollera", "PoLoca02", "Verano 2022", "Verde Manzana", "Gabardina", false)

//ARRAY CON TODOS LOS MODELOS DE LA MARCA.
const modelosNissie = [jeanNissie01, jeanNissie02, jeanNissie03, shortNissie01, shortNissie02, shortNissie03, polleraNissie01, polleraNissie02]
const modelosLasLocas = [jeanLasLocas01, jeanLasLocas02, jeanLasLocas03, shortLasLocas01, shortLasLocas02, shortLasLocas03, polleraLasLocas01, polleraLasLocas02]
//ME TRAIGO EL ELEMENTO A TRABAJAR (DOM)

let dbClickLocas = document.getElementById('dbClickLocas')
let dbClickNissie = document.getElementById('dbClickNissie')

//SE HACE CLICK EN LA PALABRA NISSIE Y SE OBSERVA POR CONSOLA EL LISTADO DE MODELOS QUE HAY DISPONIBLE


dbClickLocas.addEventListener("dblclick", stockXConsola)
dbClickNissie.addEventListener("dblclick", stockXConsola)

function stockXConsola(dbClickLocas, dbClickNissie) {

    switch (dbClickLocas, dbClickNissie) {

        case dbClickNissie:
            for (const propiedades in modelosNissie) {
                console.log(modelosNissie[propiedades])
            }
            break;

        case dbClickLocas:
            for (const propiedades in modelosLasLocas) {
                console.log(modelosLasLocas[propiedades])
            }
            break;


    }
}


//--------
//ME TRAIGO EL ELEMENTO A TRABAJAR (DOM)
let botonNissie = document.getElementById("listadoNissie")
let botonLasLocas = document.getElementById("listadoLasLocas")
let botonLunette = document.getElementById("listadoLunette")
let botonGocco = document.getElementById("listadoGocco")

//Si aprieto con un click en alguna marca aparece el listado de los nombres disponibles de esa marca.
//Creo el evento con "click"

botonNissie.addEventListener("click", function () {
    listarStock(botonNissie);
});
botonLasLocas.addEventListener("click", function () {
    listarStock(botonLasLocas);
});
botonLunette.addEventListener("click", function () {
    listarStock(botonLunette);
});
botonGocco.addEventListener("click", function () {
    listarStock(botonGocco);
});


function listarStock(listado) {


    switch (listado) {
        case botonNissie:
            botonNissie.innerHTML = ("Stock Disponible Nissie: " + " <br> " + jeanNissie01.clasificacion + " " + jeanNissie01.nombre + "<br>" + jeanNissie02.clasificacion + " " + jeanNissie02.nombre + "<br>" + jeanNissie03.clasificacion + " " + jeanNissie03.nombre + "<br>" + shortNissie01.clasificacion + " " + shortNissie01.nombre + "<br>" + shortNissie02.clasificacion + " " + shortNissie02.nombre + "<br>" + shortNissie03.clasificacion + " " + shortNissie03.nombre + "<br>" + polleraNissie01.clasificacion + " " + polleraNissie01.nombre + "<br>" + polleraNissie02.clasificacion + " " + polleraNissie02.nombre)
            break;
        case botonLasLocas:
            botonLasLocas.innerHTML = ("Stock Disponible Nissie: " + "<br>" + jeanLasLocas01.clasificacion + " " + jeanLasLocas01.nombre + "<br>" + jeanLasLocas02.clasificacion + " " + jeanLasLocas02.nombre + "<br>" + jeanLasLocas03.clasificacion + " " + jeanLasLocas03.nombre + "<br>" + shortLasLocas01.clasificacion + " " + shortLasLocas01.nombre + "<br>" + shortLasLocas02.clasificacion + " " + shortLasLocas02.nombre + "<br>" + shortLasLocas03.clasificacion + " " + shortLasLocas03.nombre + "<br>" + polleraLasLocas01.clasificacion + " " + polleraLasLocas02.nombre + "<br>" + polleraLasLocas02.clasificacion + " " + polleraLasLocas02.nombre)
            break;
        case botonLunette:
            botonLunette.innerHTML = ("Stock Disponible Nissie: " + "<br>" + jeanNissie01.clasificacion + jeanNissie01.nombre)
            break;
        case botonGocco:
            botonGocco.innerHTML = ("Stock Disponible Nissie: " + "<br>" + jeanNissie01.clasificacion + jeanNissie01.nombre)
            break;

    }
}
listarStock()


