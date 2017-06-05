var numero = 1;

$(document).ready(function () {
    //cargar noticias

    $('#masNoticias').click(function () {
        if (numero <= 2) {
            cargarJson();
        } else {
            $('#masNoticias').hide();
            alert("No hay mas noticias");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
            cargarJson();
        }
    });
});

function cargarNoticias(json) {
    $.each(json, function (i, noticias) {
        $('#noticia').append($('<div id="noticia1" class="container-fluid"> <section class="row"> <h2 class="col-sm-12 well well-sm"><a href="">'+noticias.titular+'</a></h2>   <div class="col-sm-12"><span class="glyphicon glyphicon-calendar">'+noticias.datetime+ '</span></div>    <div class="col-sm-4"> <img class="img-circle img-responsive center-block" src="' + noticias.img + '" alt="imageNoticia"></div>  <div class="col-sm-6"><p>'+noticias.desa+'</p></div>'));
    });
}

function cargarJson() {
    if (numero <= 2) {
        $.getJSON("json/" + numero + ".json", function (jsonObject) {
            cargarNoticias(jsonObject);
        });
    }
    numero++;
}