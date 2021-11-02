let abrirTurnero = document.getElementById("turnosBtn")
let turnero = document.getElementsByClassName("turneroContainer")[0]
let cancelar = document.getElementById("cancelarBtn")
let reservar = document.getElementById("reservarBtn")
let turno = document.getElementsByClassName("turnoContainer")[0]
let cerrarTurno = document.getElementById("cerrarTurno")
let nombreCliente = document.getElementById("nombre").value
let mensaje = document.getElementById("turno")

abrirTurnero.addEventListener('click', () => {
    turnero.classList.add("turneroAbierto")
})

cancelar.addEventListener('click', () => {
    turnero.classList.remove("turneroAbierto")
})

reservar.addEventListener('click', () => {
    turnero.classList.remove("turneroAbierto")
    turno.classList.add("mostrarTurno")
    mensajeTurno()
})

const mensajeTurno = () => {
    const p = document.createElement("div")
    p.innerHTML = `<p>Gracias ${nombreCliente}</p>`
    mensaje.appendChild(p)
}

cerrarTurno.addEventListener('click', () => {
    turno.classList.remove("mostrarTurno")
})