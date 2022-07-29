let contador = 0;

let botonContador = document.getElementById("contadorClick");
botonContador.addEventListener("click",contadorClick);

let botonMostar = document.getElementById("mostrarCantidadClick");
botonMostar.addEventListener("click",mostrarClick);

let nombreActual = document.getElementById("ingreseNombre");
nombreActual.addEventListener("input",saludo);

function contadorClick(){
   contador++;
   console.log(contador);
}

function mostrarClick(){
    alert(contador);
}

function saludo(){
    console.log(nombreActual.value);
}