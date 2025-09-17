// ***** IMPORT / EXPORT *****
import data from './data.js';
export const popup = (e) => {
    // 1. On vérifie si une popup est déjà dans le DOM.
    const existingPopup = document.querySelector('.popup-window');
    
    // 2. Si elle existe, on la retire avant de continuer.
    if(existingPopup) {
        existingPopup.remove();
    }
    
    // On vérifie si le lien CSS est déjà dans le document.
    const existingLink = document.querySelector('link[href="./assets/styles/popup.css"]');
    if(!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href= './assets/styles/popup.css';
        document.head.appendChild(link);
    }

    // ***** VARIABLES *****
    const desktop = document.querySelector('.desktop');
    
    // Création des variables pour comparer et savoir quelle fenêtre ouvrir
    const iconClicked = e.target.dataset.window;
    const objectDataWindow = data.windows.find(win => win.id === iconClicked);

    //Fonction pour la création d'un élément
    const elementCreator = (tag, className, where) => {
        const element = document.createElement(tag); // On choisit la balise
        if (className) element.classList.add(className); // facultatif
        if (where) where.appendChild(element); // facultatif
        return element;
    };

    // Création de la fenêtre
    const popupWindow = elementCreator('div', 'popup-window', desktop);
    const popupHeader = elementCreator('div', 'popup-header', popupWindow);
    const popupSidebar = elementCreator('div', 'popup-sidebar', popupWindow);
    const popupContent = elementCreator('div', 'popup-content', popupWindow);

    // Création des targets pour les variables
    const title = elementCreator('div', 'popup-title', popupHeader);
    title.innerHTML += objectDataWindow.title;
    const closeCross = elementCreator('div', 'close-button', popupHeader);
    closeCross.textContent = "❌";
    const content = elementCreator('div', 'content-container', popupContent);
    content.innerHTML += `${objectDataWindow.content}`;
    const sidebar = elementCreator('div', 'sidebar-container', popupSidebar);
    sidebar.innerHTML += `${data.windows[4].content}`;

    // Lier les "liens" de la sidebar avec les fenêtres dynamiques
    const links = document.querySelectorAll('.popup-link');
    links.forEach((link) => link.addEventListener('click', popup));  
    
    // Burger Menu
    const burger = document.getElementById('burger');
    burger.addEventListener('click', () => {
        popupSidebar.classList.add("active");
    });
    popupContent.addEventListener('click', () => {
        popupSidebar.classList.remove("active");
    });
    
    // Message de confirmation à la validation du formulaire
    const form = document.querySelector('form')
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Nom : " + e.target[0].value);
            console.log("Email : " + e.target[1].value);
            console.log("Message : " + e.target[2].value);
            alert(`Merci ${e.target[0].value} pour ton message ! Je reviendrai vers toi… dès que je trouve comment ça marche. 😉`);
        });
    };
    
    const closePopupWindow = () => {
        popupWindow.remove();
        const link = document.querySelector('link[href="./assets/styles/popup.css"]');
        link.remove();
    }

    // Le bouton Accueil et la croix ferment la fenêtre popup et supprime la feuille de style popup
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', closePopupWindow);
    closeCross.addEventListener('click', closePopupWindow);
};
