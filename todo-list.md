# Todo List

## Le fichier index.html

- [x] Créer le fichier `index.html`

## Titre et meta-description

- [x] **Titre de la page** : Jennifer bidouille le Web – HTML, CSS & clins d’œil geek
      _Entre 50 et 60 caractères_
- [x] **Meta-description** : Bienvenue dans le système Jennifer-OS. Ce terminal créatif répertorie mes projets web, expériences front-end et notes de bord techniques. HTML/CSS only (pour l’instant).
      _Entre 150 et 160 caractères_

## Les favicons

- [x] **Préparer les favicons :**
  - [x] Une favicon en .SVG de 512x512 `favicon.svg`
  - [x] Un fichier .ICO avec 2 layers 16x16 et 32x32 `favicon.ico`
  - [x] Deux favicons en .PNG de 16x16 et 32x32 `favicon-16x16.png` et `favicon-32x32.png`
  - [x] Une apple-touch-icon en .PNG en 180x180 `apple-touch-icon.png`

## Les Open Graph réseaux sociaux

- [x] Titre de la page : Jennifer bidouille le Web (avec style)
      _Moins de 60 caractères_
- [x] Description de la page : Un espace personnel entre UI futuriste et journal de bord numérique. Projets d’intégration, réflexions techniques, et une esthétique rétro-geek assumée.
      _Entre 120 et 140 caractères_
- [x] Image Open Graph en .PNG de 1200x630 `opengraph.png`

> On pourra utiliser le site [Opengraph](https://www.opengraph.xyz) pour générer les bonnes balises OpenGraph

## Traitement des images

- [x] Redimensionner, formatter et compresser les images utilisées sur le site
      _On pourra penser à faire différentes versions des images selon leur utilité_

**_Pour intégrer plusieurs versions d'une même image :_**

```html
<img
  srcset="./chemin/vers/image.webp, ./chemin/vers/image@2x.webp 2x"
  src="./chemin/vers/image.webp"
  alt="descriptif de l'image"
/>
```

> On pourra utiliser le site [Squoosh](https://squoosh.app/) pour générer des images en webp

- [x] Identifier les images à "preload"

```html
<!-- CORRECT : les media queries ne se chevauchent pas -->
<link
  rel="preload"
  as="image"
  href="image.jpg"
  media="screen and (min-width: 1024px)"
/>
<link
  rel="preload"
  as="image"
  href="image_medium.jpg"
  media="screen and (min-width: 768px) and (max-width: 1023px)"
/>
<link
  rel="preload"
  as="image"
  href="image_small.jpg"
  media="screen and (max-width: 767px)"
/>
```

- [x] Prévoir les icones en SVG si utilisation d'icones

> Si on intègre les icones avec <svg> et non avec <img>, on ajoutera un `aria-label:"description de l'icone"`

## La(les) polices

- [x] Télécharger la(les) polices
- [x] Lier celle(s)-ci au projet dans `settings.scss` par :

```scss
@font-face {
    font-family: "Nom-police";
    src: url(../chemin/vers/la/font.ttf)
    font-display: swap; //Pour éviter les décalages de mise en page
}
```

## La feuille de style .CSS

- [x] Créer le fichier `index.scss` et `_settings.scss`
- [x] Lier la page `_settings.scss` à l'`index.scss` par :

```scss
@import "./settings";
```

- [x] Lancer Watch Sass
- [x] Lier la feuille de style CSS au fichier HTML

## La feuille de script .JS

- [x] Créer la feuille de script .JS `index.js`
- [x] Lier le script au bas du <body>

## Structure de la page web

- [x] Réfléchir à la structure sémantique de la page web.
- [x] Définir les images les plus importantes (qui s'afficheront en premier) et les images qui sont cachées au chargement de la page. On "preload" les plus importantes, on fait un `loading="lazy"`

## Vérification de la sémantique

- [x] Vérifier qu'il n'y a pas d'erreurs sémantiques dans le code.

> On pourra utiliser le site [Markup Validation service](https://validator.w3.org/)

## Vérification des performances

- [ ] Lancer un Audit Lighthouse

## Mise à jour du Readme.md

- [ ] Remplir les premières parties du Readme
- [ ] Créer un header Github Readme `assets/sketch/github-header-image.png`

> On utilisera le site [Github Profile Header Générator](https://leviarista.github.io/github-profile-header-generator/)

- [ ] Créer un aperçu du site
- [ ] Créer une vidéo aperçu `apercu.png`
- [ ] Convertir la vidéo en GIF `video.gif`

## Commit & Push sur la manche "Main"

- [ ] Commit et Push les fichiers sur la branche principale "main"

## Effectuer les tests visuels et de performances multi-plateformes

- [ ] Remplir le tableau tests et vérifications dans le readme.
- [ ] Créer des issues avec les modifications ou améliorations à apporter.

## Modifications et améliorations

- [ ] Créer une nouvelle branche `git checkout -b fix:modif`
- [ ] Faire les modifications, les tester sur live server.
- [ ] Commit & Push les modifications
- [ ] Faire une pull request associée à une issue
- [ ] Merge les modifications sur la branche principale
- [ ] Supprime la branche "fix"
- [ ] Refaire les tests en réel
- [ ] Mettre à jour le readme

## Quand le site est satisfaisant

- [ ] insérer le dashboard et mettre à jour le paragraphe Lighthouse.
