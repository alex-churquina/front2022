async function obtenerDatos(){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    let datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td> ${element.nombre}  ${element.apellido}</td>
             <td>${element.area}</td>
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
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id,)
    let datos = await respuesta.json();
    console.log(datos);

    
    let empleado = document.getElementById("personal"); //para mostrar mi lista con los datos , no olvidarme preguntar.
    empleado.innerHTML = "";

    let nombreApellido = document.createElement("h4");
    nombreApellido.innerHTML = datos.nombre +"   "+ datos.apellido;
    

    let area = document.createElement("h4");
    area.innerHTML = datos.area;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`

    
    personal.appendChild(nombreApellido);
    personal.appendChild(area);
    personal.appendChild(imagen);

}

    let datos ={     

    "nombre":"Devo",
    "apellido":"Maidana",
    "foto": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-nombre-1606753349.jpg?crop=1.00xw:1.00xh;0,0&resize=980:* ",
    "id":"7"
    
    
    
    }
    
    
    async function modificarDatos(datos){
        console.log("Dato Modificar");
       const respuesta = await fetch ("https://6398b453fe03352a94dbe15d.mockapi.io/api/nombre/",{
                         method:"PUT",
                         body:JSON.stringify(datos),
                         headers:{ "content-type":"application/json"}
                         
    
    });
                        const data = await respuesta.json();
                            console.log(data);
    
    
}

obtenerDatos();