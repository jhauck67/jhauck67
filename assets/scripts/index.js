// ***** IMPORT DES MODULES *****
import { startIntro } from './intro.js';
import { popup } from './popup.js';

//---------------------------------

// ***** VARIABLES *****
// Bouton replay
const replay = document.querySelector('#replay');

// Icones du bureau
const icons = document.querySelectorAll('.desktop-icons-container img');

//---------------------------------

// ***** EVENT LISTENER *****
// Lancer startIntro au démarrage
window.addEventListener('load', () => {
    startIntro();
});

// Relancer startIntro grâce au bouton "#replay"
replay.addEventListener('click', () => {
    startIntro();
});

// Ouvrir une fenêtre popup selon l'îcone cliquée
icons.forEach((icon) => {
    icon.addEventListener('click', popup);
});