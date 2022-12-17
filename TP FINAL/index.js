async function obtenerDatos(){
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    const datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>

             <td>${element.nombre} ${element.apellido}</td>
            
             <td><img src="${element.foto}"></td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`            
   });

   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

async function mostrarUno(id){
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    const datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("empleado");
    empleado.innerHTML = "";

    let nombre = document.createElement("h4");
    nombre.innerHTML = datos.nombre;

    let apellido = document.createElement("h4");
    apellido.innerHTML = datos.apellido;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`

    
    empleado.appendChild(nombre);
    empleado.appendChild(apellido);
    empleado.appendChild(imagen);

}

let misDatos ={
    "nombre":"Dario",
    "apellido":"Lopez",
    "area":"Developed",
    "domicilio":"Rio Grande",
    "foto":"https://http2.mlstatic.com/D_NQ_NP_809466-MLA46695132291_072021-O.jpg",
    "id":"3"
}

async function modificarDatos(misDatos){
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+misDatos.id, {
        method: "PUT",
        body:JSON.stringify(misDatos),
        headers:{"Content-type":"application/json"}
    });
    const data = await respuesta.json();
        console.log(data);
}


modificarDatos(misDatos);
obtenerDatos();