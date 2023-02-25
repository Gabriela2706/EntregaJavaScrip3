// CON ESTE EVENTO SE VA A RECOLECTAR LA INFORMACION CUANDO EL USUARIO HAGA CLICK EN LA OPCION.
//CON ESTA INFORMACION PUEDOP LLENAR EL carritoNissie, PERO NO LLEGUE CON EL TIEMPO. 
//LA IDEA ES AGREGAR E IR MOSTRANDO CON SWEET ALERT LO QUE SE VA AGREGANDO.

const carritoNissie = []

const botonCompra = document.getElementById('listadoNissie')
botonCompra.addEventListener('click', (e) =>{
agregarAlCarro(e.target.id)
})

const agregarAlCarro = (idNissie) => {
    const modeloNS = modelosNissie.find(modelo => modelo.id == idNissie)
    carritoNissie.push(modeloNS)
    console.table(carritoNissie)
}