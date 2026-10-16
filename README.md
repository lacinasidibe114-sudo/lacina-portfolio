# Portfolio — Lacina Sidibe

Portfolio statique, responsive et optimisé pour GitHub Pages. Il utilise Tailwind CSS via CDN, une feuille CSS dédiée et [Motion](https://motion.dev/) (la version web de Framer Motion) pour les apparitions au scroll. Aucun build Node.js n'est requis.

## Mise en ligne

1. Créer ou utiliser un dépôt GitHub et pousser ce dossier sur la branche `main`.
2. Dans **Settings → Pages**, sélectionner **GitHub Actions** comme source.
3. Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publie automatiquement le contenu à chaque push sur `main`.

## Personnaliser les liens et les vidéos

- Remplacer les liens `https://github.com/` et `https://www.linkedin.com/` dans `index.html` par les profils réels.
- Ajouter le CV sous `assets/cv-lacina-sidibe.pdf`. Le bouton de téléchargement est déjà câblé.
- Ajouter le rapport sous `assets/rapport-pso.pdf` ou modifier son lien dans `index.html`.
- Pour une vidéo YouTube, remplacer le placeholder de la section projet phare par une iframe YouTube. Exemple :

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Démonstration robot mobile" loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
  allowfullscreen></iframe>
```

- Les cartes et leurs liens sont dans le tableau `projects` de [`script.js`](script.js). Remplacer les dépôts, métriques et IDs vidéo sans toucher au rendu.
- Pour un GIF ou une vidéo locale, utiliser `assets/demo.gif` ou `assets/demo.mp4`, puis remplacer le contenu de `.video-placeholder` par `<video controls muted playsinline poster="..."><source src="assets/demo.mp4" type="video/mp4"></video>`.

## Ajouter un projet détaillé

Dupliquer [`projects/project-template.html`](projects/project-template.html), renseigner le titre, la stack, les métriques et les liens, puis ajouter le lien vers cette page depuis une carte dans `script.js`.

## Données utilisées

Les résultats PSO, les technologies et le parcours affichés proviennent du CV `main.tex` présent dans ce dépôt. Les champs entre crochets (`[X]`, `[Y]`) sont volontairement laissés à compléter avec les mesures finales du projet phare.
