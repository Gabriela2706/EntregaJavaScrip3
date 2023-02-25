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


//ARRAY DE OBJETOS CON TODOS LOS MODELOS DE LAS MARCAS.
const modelosNissie = [jeanNissie01, jeanNissie02, jeanNissie03, shortNissie01, shortNissie02, shortNissie03, polleraNissie01, polleraNissie02]


//CREO UN EVENTO PARA CREAR UNA CARD POR CADA OBJETO DEL ARRAY
const botonNissie = document.getElementById('listadoNissie')

    modelosNissie.forEach((modelo) => {
        
        const div = document.createElement('div')
        // div.classList.add('card')
        div.innerHTML += `

        <div class="card" style="width: 18rem;">
        <img src="${modelo.img}" class="card-img-top" alt="foto modelo" height="400">
        <div class="card-body">
          <h5 class="card-title">${modelo.clasificacion} ${modelo.nombre}</h5>
          <p class="card-text">Temporada: ${modelo.temporada}</p>
          <p class="card-text">Material: ${modelo.material}</p>
          <p class="card-text">Color: ${modelo.color}</p>
          
          <a href="#" class="btn btn-primary" id="${modelo.id}">Lo quiero</a>
        </div>
      </div>
            
`
        botonNissie.appendChild(div)
})
// ME FALTA PUSHEAR LOS OBJETOS ELEGIDOS POR EL USUARIO, Y MOSTRAR ESO EN UN MODAL.
