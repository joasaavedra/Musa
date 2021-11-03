let abrirTurnero = document.getElementById("turnosBtn")
let turnero = document.getElementsByClassName("turneroContainer")[0]

abrirTurnero.addEventListener('click', () => {
    turnero.classList.add("turneroAbierto")
})

let cancelar = document.getElementById("cancelarBtn")

cancelar.addEventListener('click', () => {
    turnero.classList.remove("turneroAbierto")
    limpiarCampos()
})

let turno = document.getElementsByClassName("turnoContainer")[0]
let mensaje = document.getElementById("mensaje")
let nombreCliente = document.getElementById("nombre")
let apellidoCliente = document.getElementById("apellido")
let telefonoCliente = document.getElementById("telefono")
let emailCliente = document.getElementById("email")
let servicio = document.getElementById("servicio")
let fecha = document.getElementById("fecha")
let hora = document.getElementById("hora")
let formulario = document.getElementById("formulario")
let advertencias = document.getElementById("warning")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    advertencias.innerHTML = ""
    if(!expresiones.nombre.test(nombre.value)){
        advertencias.innerHTML = "El nombre no es válido<br>"
    }else if(!expresiones.nombre.test(apellido.value)){
        advertencias.innerHTML += "El apellido no es válido<br>"
    }else if(!expresiones.telefono.test(telefono.value)){
        advertencias.innerHTML += "El telefono no es válido<br>"
    }else if(!expresiones.correo.test(email.value)){
        advertencias.innerHTML += "El email no es válido<br>"
    }else if(servicio.value.length < 4){
        advertencias.innerHTML += "El servicio no es válido<br>"
    }else if(!fecha.value){
        advertencias.innerHTML += "Por favor ingrese una fecha<br>"
    }else if(!hora.value){
        advertencias.innerHTML += "Por favor ingrese la hora"
    }else{
        turnero.classList.remove("turneroAbierto")
        turno.classList.add("mostrarTurno")
        actualizarMensaje()
    }
})

const actualizarMensaje = () => {
    mensaje.innerHTML = ""
    const p = document.createElement("p")
    p.innerHTML = `<p class="mensajeTurno">Muchas gracias por elegirnos ${nombreCliente.value}!! Te esperamos el día ${fecha.value} a las ${hora.value}hs. 🥰</p>`
    mensaje.appendChild(p)
    limpiarCampos()
}

let cerrarTurno = document.getElementById("cerrarTurno")

cerrarTurno.addEventListener('click', () => {
    turno.classList.remove("mostrarTurno")
    limpiarCampos()
})

const limpiarCampos = () => {
    nombreCliente.value = ""
    apellidoCliente.value = ""
    fecha.value = ""
    hora.value = ""
    servicio.value = ""
    emailCliente.value = ""
    telefonoCliente.value = ""
}