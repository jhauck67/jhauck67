// ***** DATA *****
// Contenu des fenêtres Popup
const data = {
    windows: [
        {
            id: "whoami",
            title: `<h2><span id="burger">🍔</span> #whoami : Qui suis je?</h2>`,
            content: 
            `
            <!-- Fiche de présentation -->
            <div class="paragraph">
                <p><strong>Nom :</strong> Jennifer</p>
                <p><strong>Alias :</strong> jhauck67</p>
                <p><strong>Métier :</strong> Conductrice de train</p>
                <p><strong>Système d'exploitation :</strong> Café + Curiosité</p>
                <p><strong>Langages :</strong> HTML, CSS et un soupçon de JS</p>
            </div>
            <div class="separator"></div>
            
            <!-- Petite introduction -->
            <div class="paragraph">
                <p>
                    Je découvre le développement web petit à petit — une transition entre les rails du monde physique et les lignes de code du monde numérique.
                </p>
                <p>
                    J’avance à mon rythme (et souvent tard le soir), avec l’envie de comprendre comment les choses fonctionnent <em>sous le capot.</em>
                </p>
            </div>
            
            <div class="paragraph">
                <p>Mon parcours est peut-être atypique, mais il m’a appris à être rigoureuse, réactive, et autonome.</p>
                <p>Et spoiler : ça aide aussi quand le train s’arrête au milieu de nulle part 👀</p>
            </div>

            <div class="paragraph">
                <p>Ce terminal est mon terrain de jeu. Tu y trouveras :</p>
                <ul>
                    <li>
                        <a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">⚒️ Mes projets</a>
                        <p class="status">(plus ou moins terminés mais 100% faits maison)</p>
                    </li>
                    <li>
                        <a href="https://jhauck67.github.io/Memory-Station/" target="_blank">📚 Mes notes techniques,</a>
                        <p class="status">triées par tags</p>
                    </li>
                    <li>
                        <a href="https://jhauck67.github.io/Memory-Station/" target="_blank">💡 Quelques idées pour la suite</a>
                    </li>
                </ul>
            </div>
            `
        },
        {
            id: "projects",
            title: `<h2><span id="burger">🍔</span> #projects : Projet et création</h2>`,
            content: 
            `
            <div class="paragraph">
                <h3>📁 <a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">integrations/</a></h3>
                <p>Maquettes intégrées à la main, ligne par ligne.</p>
                <p>Pixel-perfect (ou presque) et responsive, comme les devs de l'ancien temps.</p>
                <p>Tu y trouveras mes exercices de fidélité visuelle : reproduction de designs,sites fictifs, et autres entraînements front-end <strong>sans filet</strong> (ni framework).</p>
                <p class="status"><strong>&gt; Statut :</strong> stable &amp alimenté régulièrement</p>
            </div>
            <div class="separator"></div>

            <div class="paragraph">
                <h3>📁 <a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">interactions/</a></h3>
                <p>Premier contact avec la Force… de JavaScript ✨</p>
                <p>Ici, je m’amuse à rendre les interfaces un peu plus vivantes : menus qui s’ouvrent, contenus qui s’affichent, boutons qui font des trucs.</p>
                <p>Tout en vanilla JS, parce qu’il faut bien apprendre à marcher avant de sauter dans React.</p>
                <p class="status"><strong>&gt; Statut :</strong> en cours d’électrification</p>
            </div>
            <div class="separator"></div>

            <div class="paragraph">
                <h3>📁 <a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">experiments/</a></h3>
                <p>Labo secret. Zone de tests.</p>
                <p>Ce dossier contient mes projets <em>un peu chelous</em>, mes animations faites à la sueur du keyframe, et tout ce qui ne rentrait dans aucune case.</p>
                <p>Style ? Terminal simulé, glitchs CSS, CV interactif, ou effets de texte qui clignotent (mais avec goût, hein).</p>
                <p class="status"><strong>&gt; Statut :</strong> instable mais marrant</p>
            </div>
            <div class="separator"></div>

            <div class="paragraph">
                <h3>📁 <a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">apps/</a></h3>
                <p>Pour l’instant, c’est un dossier vide… ou presque.</p>
                <p>Mais un jour, il contiendra des <em>vraies</em> apps front-end : des trucs avec des appels API, de la logique utilisateur, du stockage local, etc.</p>
                <p>Bref, ce dossier est un peu comme une promesse. (Ou une TODO.)</p>
                <p class="status"><strong>&gt; Statut :</strong> 💡 idée en cours de chargement</p>
            </div>
            `
        },
        {
            id: "blog",
            title: `<h2><span id="burger">🍔</span> #blog : Chroniques du dev</h2>`,
            content: 
            `
            <div class="paragraph">
                <p>Ici, je compilerai mes aventures en développement web :</p>
                <p>HTML trop verbeux, CSS capricieux, Git qui fait la tête, Figma qui s’ouvre lentement, et JavaScript qui fait… du JavaScript.</p>
            </div>

            <div class="paragraph">
                <p>Bref : un journal honnête et désorganisé de ce que j’apprends, teste, ou démonte (par erreur) en construisant des projets.</p>
                <p>Une sorte de mémoire vive personnelle, et peut-être un peu collective aussi.</p>
            </div>

            <div class="citation">
                <p>&gt; À suivre : 
                    <span class="pre">log_001.md</span> — dès que j’arrête de réorganiser mes dossiers…
                </p>
            </div>
            `
        },
        {
            id: "contact",
            title: `<h2><span id="burger">🍔</span> #contact : Restons en contact</h2>`,
            content: 
            `
            <div class="paragraph">
                <p>Pas de backend ici, juste un formulaire pour faire joli. Mais si tu veux vraiment me contacter, voici ce qu’il faut savoir :</p>
                <p>Tu peux remplir le formulaire qui ne fera rien, ou simplement m'envoyer un message à l’adresse ci-dessous. 🤖</p>
            </div>
            <div class="separator"></div>

            <div class="paragraph">
                <p><strong>📧 Email :</strong></p>
                <p>Tu peux m’écrire à <a href="mailto:jenniferhauck2017@gmail.com" style="transform: scale(1)">jenniferhauck2017@gmail.com</a>, je serai ravie de te répondre (sauf si je suis en train de déboguer, dans ce cas je vais probablement oublier de manger).</p>
            </div>

            <div class="paragraph">
                <p><strong>📱 Réseaux sociaux :</strong></p>
                <p>Je suis aussi sur les plateformes sociales, si tu veux échanger, partager des memes, ou me poser des questions sur le code.
                </p>
                <ul>
                    <li>
                        <a href="https://github.com/jhauck67" aria-label="Suivez-moi sur GitHub" target="_blank">🔗 GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jennifer-hauck-b125252a2/" aria-label="Suivez-moi sur Linkedin" target="_blank">🔗 Linkedin</a>
                    </li>
                    <li>
                        <a href="https://codepen.io/jhauck67" aria-label="Suivez-moi sur CodePen" target="_blank">🔗 Codepen</a>
                    </li>
                </ul>
            </div>
            <div class="separator"></div>

            <div class="citation">
                <p><strong>Disclaimer</strong>: Si tu veux vraiment utiliser le formulaire, c’est cool aussi. Je t’avertis juste qu’il est… plus décoratif que fonctionnel pour l’instant. 😜</p>
            </div>
            <div class="separator"></div>

            <form>
                <div class="name">
                    <label for="name">Nom :</label>
                    <input type="text" name="name" id="name" autocomplete="off" placeholder="Ton nom ici"/>
                </div>
                <div class="email">
                    <label for="email">Email :</label>
                    <input type="email" name="email" id="email" autocomplete="off" placeholder="ton@email.com"/>
                </div>
                <div class="message">
                    <label for="message">Message :</label>
                    <textarea name="message" id="message" placeholder="Ton message ici..."></textarea>
                </div>
                <div class="submit">
                    <input type="submit" name="submit" id="submit" value="Envoyer le message" />
                </div>
            </form>
            `
        },
        {
            id: "sidebar",
            title: "Sidebar",
            content: 
            `
            <ul>
                <li class="home link">🏠 Accueil</li>
            </ul>
            <div class="separator"></div>

            <p class ="code">Epinglés</p>
            <ul>
                <li class="link popup-link" data-window="whoami">📌 Whoami</li>
                <li class="link popup-link" data-window="projects">📌 Projects</li>
                <li class="link popup-link" data-window="blog">📌 Blog</li>
                <li class="link popup-link" data-window="contact">📌 Contact</li>
            </ul>
            <div class="separator"></div>

            <p class ="code">Favoris</p>
            <ul>
                <li><a href="https://github.com/jhauck67" target="_blank">🔗 GitHub</a></li>
                <li><a href="https://jhauck67.github.io/Sandbox-Station/" target="_blank">🔗 Sandbox-Station</a></li>
                <li><a href="https://jhauck67.github.io/Memory-Station/" target="_blank">🔗 Memory-Station</a></li>
            </ul>
            <div class="separator"></div>
            `
        }
    ]
};

export default data;
