// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
//con esto agregamos el nombre al sorteo mediante id del input 
function agregarAmigo() {
    let agregarNombres = document.getElementById('amigo').value.trim();
    if (agregarNombres === '') {
        alert("Por favor, ingrese un nombre válido.");
    } else if (nombres.includes(agregarNombres)) {
        alert('Este nombre ya está en la lista.');
    } else {
        nombres.push(agregarNombres);
        actualizarLista();
    }
    limpiarCaja();
}

function actualizarLista() {
    let listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML = ''; // Limpia la lista existente antes de reconstruirla
    // Itera sobre el arreglo `nombres` y crea un elemento <li> para cada nombre
    for (let nombre of nombres) {
        let nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.textContent = nombre;
        listaHtml.appendChild(nuevoElementoLista);
    }
}

//Realiza el sorteo del nombre
function sortearAmigo() {
     //si el array esta vacio arrojara un alert
    if (nombres.length === 0) {
        alert('La lista está vacía. Por favor, ingrese nombres para sortear.');
    } else {
        //realiza el sorteo con el legth del array
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        // con los [] se selecciona una caracteristica especifica del array
        let nombreSeleccionado = nombres[indiceAleatorio];
        document.getElementById('resultado').textContent = `El ganador es: 🎉 ${nombreSeleccionado} 🎉`;
        nombres = [];
        actualizarLista(); // Llama a esta función para limpiar la lista en el DOM
    }
}

//limpia el input
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}



