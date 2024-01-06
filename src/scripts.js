function slider (anything){
    document.querySelector ('.one') .src = anything;
};

let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
menu.classList.toggle ('bx-x');
navbar.classList.toggle ('open');
}



const imagens = ['imgs/product1.png', 'imgs/product2.png', 'imgs/product3.png'];
let currentIndex = 0;



function slider() {
    // Obtém a referência da imagem principal
    let imagemPrincipal = document.querySelector('.one');
    
    // Substitui a imagem principal pela imagem 2
    imagemPrincipal.src = 'imgs/product1.png';
}

function slider2() {
    // Obtém a referência da imagem principal
    let imagemPrincipal = document.querySelector('.one');
    
    // Substitui a imagem principal pela imagem 2
    imagemPrincipal.src = 'imgs/product2.png';
}

function slider3() {
    // Obtém a referência da imagem principal
    let imagemPrincipal = document.querySelector('.one');
    
    // Substitui a imagem principal pela imagem 2
    imagemPrincipal.src = 'imgs/product3.png';
}

function toggleMenu() {
    const menuOptions = document.querySelector('.menu-options');
    menuOptions.classList.toggle('show');
}