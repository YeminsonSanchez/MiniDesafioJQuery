$(document).ready(function () {
  $("#hazClick").on("click", function () {
    //tomamos el id y le agregamos un evento on.click
    $("#cambiame").css("background-color", "green"); //aplicamos el evento on.click a el id#cambiame para cambiar el color de fondo
    $("#cambiame").css("font-size", "45px"); //aplicamos el evento on.click a el id#cambiame para cambiar el tamaño de la letra
  });
});
