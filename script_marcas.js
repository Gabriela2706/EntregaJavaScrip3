// OBJETO CONSTRUCTOR + DOM + EVENTOS DOBLECLICK EN PAGINA "MARCAS"
//CONSTRUCTOR

class Nissie {
    constructor(id, clasificacion, nombre, temporada, color, material, oferta, img) {

        this.id = id,
        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.temporada = temporada;
        this.color = color;
        this.material = material;
        this.oferta = oferta;
        this.img = img;

    }
}

const jeanNissie01 = new Nissie("1","Jean", "Electra", "Verano 2022", "Blanco", "Jean liso", false, './../multimedia/nissie_electra_jean.jpg')
const jeanNissie02 = new Nissie("2","Jean", "Cleo", "Verano 2022", "Azul Francia", "Jean batik", false, './../multimedia/nissie_cleo_jean.jpg')
const jeanNissie03 = new Nissie("3","Jean", "Alexa", "Verano 2022", "Celeste", "Jean veteado", false, './../multimedia/nissie_alexa_jean.jpg')
const shortNissie01 = new Nissie("4","Short", "Minnie", "Verano 2022", "Blanco", "Gabardina elastizada", false, './../multimedia/nissie_minnie_short.jpg')
const shortNissie02 = new Nissie("5","Short", "Malibu", "Verano 2022", "Negro", "Gabardina", true, './../multimedia/nissie_malibu_short.jpg')
const shortNissie03 = new Nissie("6","Short", "Regina", "Verano 2021", "Gris", "jean liso", true, './../multimedia/nissie_regina_short.jpg')
const polleraNissie01 = new Nissie("7","Pollera", "Flora", "Verano 2022", "Lunares", "Modal y Algodon", false, './../multimedia/nissie_flora_pollera.jpg')
const polleraNissie02 = new Nissie("8","Pollera", "Pola", "Verano 2022", "Verde Manzana", "Gabardina", false,'./../multimedia/nissie_pola_pollera.jpg')

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

//ARRAY DE OBJETOS CON TODOS LOS MODELOS DE LAS MARCAS.
const modelosNissie = [jeanNissie01, jeanNissie02, jeanNissie03, shortNissie01, shortNissie02, shortNissie03, polleraNissie01, polleraNissie02]
const modelosLasLocas = [jeanLasLocas01, jeanLasLocas02, jeanLasLocas03, shortLasLocas01, shortLasLocas02, shortLasLocas03, polleraLasLocas01, polleraLasLocas02]

//ME TRAIGO EL ELEMENTO A TRABAJAR (DOM)

let dbClickLocas = document.getElementById('dbClickLocas')
let dbClickNissie = document.getElementById('dbClickNissie')

//SI HACE CLICK EN LA PALABRA NISSIE O LAS LOCAS SE OBSERVA POR CONSOLA EL LISTADO DE MODELOS QUE HAY DISPONIBLE


dbClickLocas.addEventListener("dblclick", stockXConsolaLasLocas)
dbClickNissie.addEventListener("dblclick", stockXconsolaNissie)

function stockXConsolaLasLocas() {

    if (dbClickLocas) {
        for (const propiedades in modelosLasLocas) {
            console.log(modelosLasLocas[propiedades])
        }
    }
}

function stockXconsolaNissie() {

    if (dbClickNissie) {
        for (const propiedades in modelosNissie) {
            console.log(modelosNissie[propiedades])
        }
    }
}



//--------
//ME TRAIGO EL ELEMENTO A TRABAJAR (DOM)


let botonLasLocas = document.getElementById("listadoLasLocas")
let botonLunette = document.getElementById("listadoLunette")
let botonGocco = document.getElementById("listadoGocco")

//Si aprieto con un click en alguna marca aparece el listado de los nombres disponibles de esa marca.
//Creo el evento con "click"


botonLasLocas.addEventListener("click", function () {
    listarStock(botonLasLocas);
});
botonLunette.addEventListener("click", function () {
    listarStock(botonLunette);
});
botonGocco.addEventListener("click", function () {
    listarStock(botonGocco);
});

