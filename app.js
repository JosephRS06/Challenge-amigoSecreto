// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let numeroMaximo = 20;
//Capturar el valor del campo de entrada
function agregarAmigo(){
   let agregarNombres = document.getElementById('amigo').value;
   if (agregarNombres =='') {
        alert("por favor ingrese un nombre valido")
   } else{
        nombres.push(agregarNombres);
   }

   limpiarCaja();
   console.log(nombres);
   return;
}

function sortearAmigo(){
    if (nombres.length <= numeroMaximo){
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSeleccionado = nombres[indiceAleatorio];
        alert(`el nombre seleccionado es: ${nombreSeleccionado}`)
    } else{
        alert("El array está vacío. No hay nombres para seleccionar.");
    } 
}


function limpiarCaja (){
    document.getElementById('amigo').value = '';
}


// reiniciar la aplicaciones una vez hecho el sorteo 
// mostrar los elememntos de la lista en la pagina 
// incluir el for 
// ver posbles mejoras en el codigo 