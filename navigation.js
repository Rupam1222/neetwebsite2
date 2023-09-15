let menuToggle = document.querySelector('.menuToggle');
let allMenu = document.querySelector('#allMenu');
let navbar = document.querySelector('.navbar')

menuToggle.onclick = function(){
navbar.classList.toggle('open');
}

var selectList = document.querySelector('.selectList');

selectList.onclick = function(){
    selectList.classList.add('active');
}
