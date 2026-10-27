const botao = document.querySelector('.menu-botao');
const menu = document.querySelector('nav ul');

botao.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});