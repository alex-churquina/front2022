let botonNuevo = document.getElementById("Boton");
botonNuevo.addEventListener("click",chip);

 function chip(){
    let miLista = document.querySelector("ol");
    let ingrese = document.getElementById("ingrese");
    let agregadoNuevo = document.createElement("li");
    agregadoNuevo.innerHTML = ingrese.value;
    miLista.appendChild(agregadoNuevo); 
 }



 let miButon = document.getElementById("miButon");
 miButon.addEventListener("click",agregarTexto);

function agregarTexto(){
    let esTexto = document.getElementById("divParrafo");
    let inputParrafo = document.getElementById("inputParrafo");
    let textoAgregado = document.createElement("p");
    textoAgregado.innerHTML = inputParrafo.value;
    esTexto.appendChild(textoAgregado);

}

