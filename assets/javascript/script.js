const inputTareaPorAgregar = document.getElementById("agregarTarea");
const btnAgregarTarea = document.getElementById("btnAgregar");
const idTareaMostrarLista = document.getElementById("idTareas");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const totalTareasRealizada = document.getElementById("totalRealizadas")
const btnTotalTareasCompletadas = document.getElementById("totalTareasCompletadas")
const tareas = [
  { id: 16, tarea: "Hacer mercado", completado: false },
  { id: 60, tarea: "Estudiar para la prueba", completado: false },
  { id: 24, tarea: "Sacar a pasear a Tobby", completado: false },
];

//////////////////////////////
function renderTareas() {
    let html = "";
    const tareasCompletadas = tareas.filter((ele) => ele.completado).length
  tareas.forEach((tarea) => {
    html += `<li>${tarea.id} ${tarea.tarea}<button onclick="actualizarTareasCompletadas(${tarea.id})">realizado</button> <button onclick="borrarItem(${tarea.id})">X</button></li>`;
    listaTareas.innerHTML = html;
      totalTareas.innerHTML = `Total de tareas: ${tareas.length}`;
      totalTareasRealizada.innerHTML = `Tareas realizadas:${tareasCompletadas}`
  });
}
renderTareas();
/////////////////////////////////
btnAgregarTarea.addEventListener("click", () => {
  const valorinput = inputTareaPorAgregar.value;
  tareas.push({
    id: Math.floor(Math.random() * 100),
     tarea: valorinput,
    completado: false
  });
  inputTareaPorAgregar.value = "";
  renderTareas();
});
////////////////////////////

function borrarItem(id) {
  const index = tareas.findIndex((ele) => ele.id === id);
  tareas.splice(index, 1);
  renderTareas(id);
}
///////////////////////////

function actualizarTareasCompletadas(id) {
    const tareaIndex = tareas.findIndex((ele) => ele.id === id)
    console.log(tareaIndex)
    tareas[tareaIndex].completado = true
    console.log(tareas[tareaIndex])
    renderTareas(id)
}

