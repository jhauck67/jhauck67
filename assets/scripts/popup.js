// ***** IMPORT / EXPORT *****
import data from './data.js';
export const popup = (e) => {

    // ***** PRECAUTIONS PREALABLES *****
        // 1. On vérifie si une popup est déjà dans le DOM.
        const existingPopup = document.querySelector('.popup-window');

        // 2. Si elle existe, on la retire avant de continuer.
        if(existingPopup) {
            existingPopup.remove();
        }

        // 3. On vérifie si le lien CSS est déjà dans le document.
        const existingLink = document.querySelector('link[href="./assets/styles/popup.css"]');
        if(!existingLink) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href= './assets/styles/popup.css';
            document.head.appendChild(link);
        }

    // ***** CREATION DE LA FENETRE POPUP *****
        // 1. On pointe le desktop pour y créer la popup.
        const desktop = document.querySelector('.desktop');

        // 2. On crée une fonction pour la création d'un élément.
        const elementCreator = (tag, className, where) => {
            const element = document.createElement(tag); // On choisit la balise
            if (className) element.classList.add(className); // facultatif
            if (where) where.appendChild(element); // facultatif
            return element;
        };

        // 3. On crée la structure de la fenêtre.
        const popupWindow = elementCreator('div', 'popup-window', desktop); // Squelette de la popup
            // Parties de la popup.
            const popupHeader = elementCreator('div', 'popup-header', popupWindow);
            const popupSidebar = elementCreator('div', 'popup-sidebar', popupWindow);
            const popupContent = elementCreator('div', 'popup-content', popupWindow);

        // 4. On crée des targets pour les variables data.
        const title = elementCreator('div', 'popup-title', popupHeader);
        const content = elementCreator('div', 'content-container', popupContent);
        const sidebar = elementCreator('div', 'sidebar-container', popupSidebar);

        // 5. On crée les "boutons" pour l'interactivité.
            // Bouton "X" pour fermer la fenêtre.
            const closeCross = elementCreator('div', 'close-button', popupHeader);
            closeCross.textContent = "❌";
            // Bouton "Burger" pour ouvrir la sidebar.
            const burgerBtn = elementCreator('div', 'burger-button', popupHeader);
            burgerBtn.id = "burger";
            burgerBtn.textContent = "🍵";

    // ***** INTERACTIVITE DE LA FENETRE POPUP *****
        // I. Ouverture de la bonne fenêtre popup
            // 1. On crée des variables pour comparer et savoir quelle fenêtre ouvrir.
            const iconClicked = e.target.dataset.window;
            const objectDataWindow = data.windows.find(win => win.id === iconClicked);

            // 2. On injecte les data dans la popup. 
            title.innerHTML += `${objectDataWindow.title}`;
            content.innerHTML += `${objectDataWindow.content}`;
            sidebar.innerHTML += `${data.windows[4].content}`;

            // 3. On lie les "liens" de la sidebar avec les fenêtres dynamiques.
            popupSidebar.addEventListener(('click'), (e) => {
                if (e.target.closest('.popup-link')) { // On cherche le parent qui contient le selecteur
                    popup(e);
                };
            });

            // 4. On crée un lien "Accueil".
            const homeBtn = document.querySelector('.home');

            // 5. On crée un "bouton" pour le menu burger.
            const burger = document.getElementById('burger');

        // II. Interactivité du formulaire = Message de confirmation à la validation.
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

        // III. Interactivité du Burger Menu.
            // 1. Il s'ouvre quand on clique sur l'icone.
            burger.addEventListener('click', () => {
                popupSidebar.classList.add("active");
            });

            // 2. Il se ferme quand on clique sur le content de la fenêtre popup.
            popupContent.addEventListener('click', () => {
                popupSidebar.classList.remove("active");
            });

        // IV. Fermeture de la fenêtre popup.
            // 1. On crée une fonction pour fermer la fenêtre et supprimer la feuille de style.
            const closePopupWindow = () => {
                popupWindow.remove();
                const link = document.querySelector('link[href="./assets/styles/popup.css"]');
                link.remove();
            }

            // 2. Le bouton Accueil et la croix ferment la fenêtre popup et supprime la feuille de style popup
            popupWindow.addEventListener(('click'), (e) => {
                if(e.target === homeBtn || e.target === closeCross) {
                    closePopupWindow()
                }
            });
};
