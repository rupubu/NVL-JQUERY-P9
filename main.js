$(document).ready( function() {
    
       
    // Añade (mediante jQuery, evidentemente) una clase a los div que engloba las décadas musicales, que sea igual a su identificador.
    var Decadas = $("#container").children("div");
    for (var i = 0; i < Decadas.length; i++) {
        $(Decadas[i]).addClass(Decadas[i].id);
    }

    // Obtén el tipo de música y la década a la que pertenece (a través de los identificadores de los div) del grupo con identificador “heroes”.
    msg();
    function msg(e) {
        let Grupo, Origen, Decada;
        
        if (e == null) {
            Grupo = $("#heroes");
        }
        else {
            Grupo = $(e.currentTarget);
        }
        Origen = Grupo.closest("div");
        Decada = Origen.parent();

        alert("El grupo " + Origen.attr("class") + ": " + Grupo.text() + " es de la decada de los " + Decada.attr("id") + ".");
    }
    $("div").children("p").on("click",msg);

    //A los grupos siguientes a #heroes dentro de su categoría, añádeles un identificador que sea igual al nombre del grupo.
    var Grupo = $("#heroes").nextAll();
    for (var i = 0; i < Grupo.length; i++) {
        $(Grupo[i]).attr("id", $(Grupo[i]).text());
    }

    //Busca si existe un grupo internacional cuyo id sea queen, y si no existe, añádelo dentro de #ochenta #internacional.
    var Internacional, resultado;
    Internacional = $(".internacional").children("p");
    for (var i = 0; i < Internacional.length; i++) {
        if ( $(Internacional[i]).text() === "Queen" ) { break;}
    }
    if (i < Internacional.length) {
        alert("Se ha encontrado el grupo: Queen"); //Probe si funcionaba añadienlo a mano primero.
    }
    else {
        alert("No se ha encontrado el grupo: Queen. Se va añadir donde corresponde.");
        $("#ochenta").find(".internacional").append("<p>Queen</p>");
    }    
});