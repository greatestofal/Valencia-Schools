document.getElementById('val').innerHTML="Welcome & Greetings!";

let loader = document.querySelector('.loader');
let pacman = document.getElementById('pacman');

window.onload = function(){
    loader.style.display='none';

    pacman.style.display='block';
}