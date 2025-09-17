export const startIntro = () => {

    // ***** VARIABLES ET CONSTANTES *****
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    const introText = [
    'SYSTEM BOOTING...',
    '...',
    '[Initializing hardware...OK]',
    '[Loading core modules...OK]',
    '[Establishing connection to the matrix...OK]',
    '...',
    'Bienvenue dans Jennifer OS.',
    'Le système est en cours de démarrage...',
    ];

    const typingSpeed = 50; // ms par lettre
    const fadeDelay = 2000; // ms avant disparition de l'écran

    let lineIndex = 0;
    let letterIndex = 0;
    let currentLine;

    // ***** QUE FAIT LA FONCTION "startIntro" ?
    // Effacement de la page HTML de base
    header.style.display = "none";

    // Création du container de texte
    body.classList.add('intro');
    const introContainer = document.createElement('div');
    introContainer.classList.add('introText-container');
    body.appendChild(introContainer);
    
    // Création d'une nouvelle ligne
    const newLine = () => {
        currentLine = document.createElement('p');
        currentLine.classList = 'code active';
        introContainer.appendChild(currentLine);
        currentLine.textContent = "";
    }
        
    // Ecrire lettre par lettre
    const typeLetter = () => {
        setTimeout(() => {
            if(lineIndex >= introText.length) {
                setTimeout(() => {
                    introContainer.classList.add('fade-out');
                    introContainer.addEventListener('animationend', () => {
                        header.style.display = "block";
                        introContainer.remove();
                        body.classList.remove('intro');
                    });
                }, fadeDelay);
            } else if (letterIndex < introText[lineIndex].length) {
                const car = introText[lineIndex][letterIndex];
                currentLine.textContent += car;
                letterIndex++;
                setTimeout(typeLetter, typingSpeed);
            } else {
                lineIndex++;
                currentLine.classList.remove('active');
                letterIndex = 0;
                newLine();
                setTimeout(typeLetter, typingSpeed);
            }
        }, typingSpeed);
    };

    // Appel des fonctions
    newLine();
    typeLetter();
        
};