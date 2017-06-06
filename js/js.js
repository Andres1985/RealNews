/*variable que nos ayudara a leer el Json*/
var num = 1;

$(document).ready(function () {
    //cargar noticias
    /*Cuando clicamos en el boton "mas noticias" cargar los dos Json*/
    $('#masNoticias').click(function () {
        if (num <= 2) {
            getJson();
        } else {
            $('#masNoticias').hide();
            alert("No hay mas noticias");//en caso de no haya más documento json mostrara el mensaje
        }
    });
    /*Carga directamente los Json con cuando hagamos scroll en la web */
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
            getJson();
        }
    });
});
/*Funcion que introduce el json en las diferentes etiquetas señaladas del html*/
function getNews(json) {
    $.each(json, function (i, noticias) {
        $('#noticia').append($('<div id="noticia1" class="container-fluid"> <section class="row"> <h2 class="col-sm-12 well well-sm"><a href="">'+noticias.titular+'</a></h2>   <div class="col-sm-12"><span class="glyphicon glyphicon-calendar">'+noticias.datetime+ '</span></div>    <div class="col-sm-4"> <img class="img-circle img-responsive center-block" src="' + noticias.img + '" alt="imageNoticia"></div>  <div class="col-sm-6"><p>'+noticias.desa+'</p></div>'));
    });
}
/*Funcion que carga el Json*/
function getJson() {
    if (num <= 2) {
        $.getJSON("json/" + num + ".json", function (jsonObject) {
            getNews(jsonObject);
        });
    }
    num++;
}