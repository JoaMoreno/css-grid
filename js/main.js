const boton = document.getElementById("boton-toggle")
boton.addEventListener("click", toggle)
function toggle(){
    var grid = document.getElementById("grid-toggle")
    grid.classList.toggle("area-1")
    grid.classList.toggle("area-2")
}