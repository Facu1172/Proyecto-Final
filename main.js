//CARGA DE FICHAS DE PERSONAS
let Tareas= []


class tarea{
    id
constructor(nombre,sector,mensaje,mail){
    this.nombre=nombre
    this.sector=sector
    this.mensaje=mensaje
    this.mail=mail
    
}
}
function DatosTarea (){
    let nombre = document.getElementById("nombre").value
    let sector = document.getElementById("sector").value
    let mensaje = document.getElementById("mensaje").value
    let mail = document.getElementById("mail").value

    let OBJETO_TAREA = new  tarea(nombre,sector,mensaje,mail)
    if (typeof parseInt(OBJETO_TAREA.sector)==NaN){alert("Edad incorrecta")
    return null;}
    return OBJETO_TAREA
    
   
}

document.getElementById("formulario").onsubmit = (event) => validarFormulario(event);
function validarFormulario(event) {
    event.preventDefault();
    OBJETO_TAREA = DatosTarea()
    if(OBJETO_TAREA == null){
        return;

    }
    OBJETO_TAREA.id = Tareas.length +1    
Tareas.push(OBJETO_TAREA) 
AgregarTareas()
actualizarTareasStorage()

}

  function eliminarTarea(idTarea) {
    let columnaBorrar = document.getElementById(`columna-${idTarea}`);
    let indiceBorrar = Tareas.findIndex(
      (tarea) => Number(tarea.id) === Number(idTarea)
    );
  
    Tareas.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarTareasStorage();
  }

function AgregarTareas() {
    let ListaTareas = document.getElementById("ListaTareas");
    ListaTareas.innerHTML = "";
    Tareas.forEach((tarea) => {
      let column = document.createElement("div");
      column.className = "col-md-4 mt-3";
      column.id = `columna-${tarea.id}`;
      column.innerHTML = `
              <div class="card">
                  <div class="card-body">
                  <p class="card-text">ID:
                      <b>${tarea.id}</b>
                  </p>
                  <p class="card-text">Nombre:
                      <b>
                      <div id= "nombrenuevo-${tarea.id}">
                      ${tarea.nombre}
                      </div>
                      </b>
                  </p>
                  <p class="card-text">Sector:
                      <b><div id= "sectornuevo-${tarea.id}">
                      ${tarea.sector}
                      </div></b>
                  </p>
                  <p class="card-text">calle:
                      <b><div id= "mensajenuevo-${tarea.id}">
                      ${tarea.mensaje}
                      </div></b>
                  </p>
                  <p class="card-text">Numeracion:
                      <b><div id= "mailnuevo-${tarea.id}">
                      ${tarea.mail}
                      </div></b>
                  </p>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn-danger" id="botonEliminar-${tarea.id}" >Eliminar</button>
                  </div>
                  <div class="card-footer">
                  <button class="btn btn-caution" id="botonmodificarNombre-${tarea.id}" >modificar nombre</button>
              </div>
              <div class="card-footer">
              <button class="btn btn-caution" id="botonmodificarSector-${tarea.id}" >modificar sector</button>
          </div>
          <div class="card-footer">
          <button class="btn btn-caution" id="botonmodificarMensaje-${tarea.id}" >modificar mensaje</button>
      </div>
      <div class="card-footer">
          <button class="btn btn-caution" id="botonmodificarMail-${tarea.id}" >modificar mail</button>
      </div>
              </div>`;
              ListaTareas.append(column);
              let botonEliminar = document.getElementById(`botonEliminar-${tarea.id}`);
              botonEliminar.onclick = () => eliminarTarea(tarea.id)
              actualizarTareasStorage();

              let botonModificarNombre = document.getElementById(`botonmodificarNombre-${tarea.id}`);
              botonModificarNombre.onclick = () => modificarNombre(tarea.id);
            
              let botonmodificarSector = document.getElementById(`botonmodificarSector-${tarea.id}`);
              botonmodificarSector.onclick = () => modificarSector(tarea.id);
            
              let botonmodificarMensaje = document.getElementById(`botonmodificarMensaje-${tarea.id}`);
              botonmodificarMensaje.onclick = () => modificarMensaje(tarea.id);

              let botonmodificarMail = document.getElementById(`botonmodificarMail-${tarea.id}`);
              botonmodificarMail.onclick = () => modificarMail(tarea.id);
            }
            )
             }
             
            function modificarNombre (id){
            let NombreModificado = prompt("Ingrese el nuevo nombre")
            
            let indiceTareaABuscar = Tareas.findIndex((tarea => tarea.id == id));

            Tareas[indiceTareaABuscar].nombre = NombreModificado
            document.getElementById ("nombrenuevo-"+id).innerHTML= NombreModificado
        }
        function modificarSector (id){
            let SectorModificado = prompt("Ingrese el sector")
            
            let indiceTareaABuscar = Tareas.findIndex((tarea => tarea.id == id));

            Tareas[indiceTareaABuscar].nombre = SectorModificado
            document.getElementById ("sectornuevo-"+id).innerHTML= SectorModificado
        }
        function modificarMensaje (id){
            let MensajeModificado = prompt("Ingrese el nuevo mensaje")
            
            let indiceTareaABuscar = Tareas.findIndex((tarea => tarea.id == id));

            Tareas[indiceTareaABuscar].calle = MensajeModificado
            document.getElementById ("mensajenuevo-"+id).innerHTML= MensajeModificado
        }
        function modificarMail (id){
            let MailModificado = prompt("Ingrese el nuevo mail")
            
            let indiceTareaABuscar = Tareas.findIndex((tarea => tarea.id == id));

            Tareas[indiceTareaABuscar].calle = MailModificado
            document.getElementById ("mailnuevo-"+id).innerHTML= MailModificado
        }

        function actualizarTareasStorage() {
            let tareasJSON = JSON.stringify(Tareas);
            localStorage.setItem("Tareas", tareasJSON);
          }

          function obtenerTareasStorage() {
            let tareasJSON = localStorage.getItem("Tareas");
            if (tareasJSON) {
              Tareas = JSON.parse(tareasJSON);
              AgregarTareas();
            }
          }
          
          obtenerTareasStorage()
          actualizarTareasStorage()