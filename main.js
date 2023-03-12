let modal = document.querySelector(".modal");
let toast1 = document.querySelector('.toast')

function open1(){
     modal.classList.toggle('show');     
}
function end(){
    modal.classList.toggle('hide');
    open1();
}
function close1(){
    modal.classList.toggle('hide');
    open1();
}
