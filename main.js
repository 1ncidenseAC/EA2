$(document).ready(function(){
    $("#usuario").submit(function(event){
        var nombre = $("#nombre").val();
        var celular = $("#celular").val();
        if(nombre.length < 3 || nombre.length > 25){
            alert("El Nombre debe tener entre 3 y 25 caracteres.");
            return;
        }
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }
        alert("¡Registro exitoso!\nVuelva al inicio");
    });
});
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
}
const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light")
}
const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}