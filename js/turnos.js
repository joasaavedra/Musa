var turnosCovid19 = alert("Por protocolo Covid-19 los turnos se daran con una hora de diferencia entre uno y otro. Nos cuidemos entre todos ❤"); 

class Cliente {
    constructor(nombre, apellido, edad, telefono, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono; 
        this.mail = mail;
    }
}

const mostrarCliente = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let nuevoCliente = new Cliente(nombre, apellido, edad, telefono, mail);
    alert(`Hola ${nombre}! Nos comunicaremos con vos en la brevedad al numero ${telefono} para confirmar el turno. Muchas gracias! ❤`);
    console.log(nuevoCliente);
};







