
$.getJSON("js/lang.json", function(json){
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    if(!localStorage.getItem("lang")){
        localStorage.setItem("lang", "en");
    }
    var lang = localStorage.getItem("lang");
    var doc = json;
    $('.lang').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
    });//Each

    $('.translate').click(function(){
        localStorage.setItem("lang", $(this).attr('id')) ;
        var lang = $(this).attr('id');
        var doc = json;
        $('.lang').each(function(index, element){
            $(this).text(doc[lang][$(this).attr('key')]);
        }); //Each
    }); //Funcion click
});//Get json AJAX


/* funcion boton de idiomas */

const buttons = document.querySelectorAll('.buttons-section button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


