function mostrarSeccion(id){

document.querySelectorAll(".seccion").forEach(sec=>{
sec.classList.remove("activa");
});

document.getElementById(id).classList.add("activa");

}

function comprar(producto, precio){
alert("Compraste: " + producto + " 💸 $" + precio);
}

// mostrar inicio al cargar
window.onload = function(){
mostrarSeccion("inicio");
}
