$(document).ready(function () {
  $("#sobreMi").on("mouseover", function () {
    //tomamos el id y le agregamos un evento on.mouseover
    $("ul > li:nth-child(even)").css("background-color", "green"); //seleccionamos los elementos pares y impares de li y le agregamos color de fondo
    $("ul > li:nth-child(odd)").css("background-color", "yellow");
  });
  $("#sobreMi").on("mouseleave", function () {
    //tomamos el id y le agregamos un evento on.mouseleave
    $("ul > li").css("background-color", "#CBD5E0"); //seleccionamos todos los elementos li y le devolvemos a su color de fondo original
  });
});
