let btnMenu = document.querySelector('.btn-menú');
let menú = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menú');
let activador = true;

// Menu de Navegacion

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menú i').classList.toggle('fa-times');

    if(activador){

     menú.style.left = "0";
     menú.style.transition = "0.5s";

     activador = false;

    }else{
        activador = false;

     menú.style.left = "-100%";
     menú.style.transition = "0.5s";

     activador = true;

    }

});

// Intercalar clase Active

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((Element) => {

 Element.addEventListener('click', (event) => {

    enlaces.forEach( (link) => {
        link.classList.remove('activo');
    });

    event.target.classList.add('activo');

 });

});

// Efectos Scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    //Mostrar y ocutltar menu
    if (prevScrollPos > currenScrollPos) {

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    }else{
      containerMenu.style.top = "-60px";
      containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    //Mostrar y ocultar scroll Estilos

    let arriba = window.pageYOffset;

    if (arriba <= 100) {
        containerMenu.style.borderBottom = "none";
    }else{
        containerMenu.style.borderBottom = "5px solid #F6A3B1";
    }
}

let Bajar = document.querySelector('#abajo');

Bajar.addEventListener('click', () => {
    document.body.scrollTop = 60;
    document.documentElement.scrollTop = 900;
})
