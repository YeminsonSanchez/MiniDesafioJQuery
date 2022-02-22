$(document).ready(function () {
  $("#btnNatvar").on("click", function () {
    //tomamos el id y le agregamos un evento on.click
    $(".animacion").toggle("slow");
    //tomamos la clase animacion y le agregamos un evento toggle "slow" para que se ve animado
  });
});
