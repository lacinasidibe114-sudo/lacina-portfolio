# Portfolio — Lacina Sidibe

Portfolio statique, responsive et optimisé pour GitHub Pages. Il utilise Tailwind CSS via CDN, une feuille CSS dédiée et [Motion](https://motion.dev/) (la version web de Framer Motion) pour les apparitions au scroll. Aucun build Node.js n'est requis.

## Mise en ligne

1. Créer ou utiliser un dépôt GitHub et pousser ce dossier sur la branche `main`.
2. Dans **Settings → Pages**, sélectionner **GitHub Actions** comme source.
3. Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publie automatiquement le contenu à chaque push sur `main`.

## Personnaliser le portfolio

- Le portfolio est volontairement utilisable sans photo, capture d'écran ni vidéo. La section projet phare utilise une visualisation CSS de l'architecture ROS 2 ; les médias pourront être ajoutés plus tard sans refaire la mise en page.
- Ajouter le CV sous `assets/cv-lacina-sidibe.pdf`. Le bouton de téléchargement est déjà câblé.
- Ajouter le rapport sous `assets/rapport-pso.pdf` ou modifier son lien dans `index.html`.
- Les cartes de projets et leurs technologies sont dans le tableau `projects` de [`script.js`](script.js).
- Le lien GitHub principal est déjà configuré vers `lacinasidibe114-sudo/lacina-portfolio`. Ajouter les dépôts individuels lorsque leurs URLs seront prêtes.

## Ajouter un projet détaillé

Dupliquer [`projects/project-template.html`](projects/project-template.html), renseigner le titre, la stack, les métriques et les liens, puis ajouter le lien vers cette page depuis une carte dans `script.js`.

## Données utilisées

Les résultats PSO, les technologies et le parcours affichés proviennent du CV `main.tex` présent dans ce dépôt. Les mesures encore en cours de benchmark ne sont pas présentées comme des résultats afin de préserver la crédibilité du portfolio.
