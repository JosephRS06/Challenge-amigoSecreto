// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
//con esto agregamos el nombre al sorteo mediante id del input 
function agregarAmigo(){
   let agregarNombres = document.getElementById('amigo').value;
   if (agregarNombres =='') {
        alert("por favor ingrese un nombre valido");
   } else if (nombres.includes(agregarNombres)){
    alert ('Este nombre ya esta en la lista');
   }   else{
        nombres.push(agregarNombres);
        agregarNombreLista(agregarNombres);
   }
   limpiarCaja();
   console.log(nombres);
}

//Con esto agregamos los nombres a la lista del html
function agregarNombreLista(nombre) {
    let listaHtml = document.getElementById('listaAmigos'); 
    let nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = nombre;
    listaHtml.appendChild(nuevoElementoLista);
}

//Realiza el sorteo del nombre
function sortearAmigo(){
    //si el array esta vacio arrojara un alert
    if (nombres.length ===0){
        alert('la lista esta vacia, por favor ingresar nombres para sortear')
    } else{
        //realiza el sorteo con el legth del array
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        // con los [] se selecciona una caracteristica especifica del array
        let nombreSeleccionado = nombres[indiceAleatorio];
        document.getElementById('resultado').textContent = `El ganador es: ${nombreSeleccionado}`;
        nombres = [];
        document.getElementById('listaAmigos').innerHTML = ''; 
    } 
}

//Limpia el input
function limpiarCaja (){
    document.getElementById('amigo').value = '';
}



