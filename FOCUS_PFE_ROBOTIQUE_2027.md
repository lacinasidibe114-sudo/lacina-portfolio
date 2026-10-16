# Focus réel pour le PFE 2027 — robotique mobile autonome

**Objectif :** obtenir un PFE qui transforme ta maîtrise de ROS 2, Nav2, Docker, Git, MoveIt, Gazebo, Isaac Sim, LLM/VLM, TTS/STT et YOLO en **expérience professionnelle ou scientifique difficile à remplacer**.

**Conclusion directe :** ne plus investir ton temps dans l'apprentissage des outils de base. Pour avoir un très bon CV, tu dois maintenant démontrer que tu sais faire fonctionner une autonomie robotique **dans un environnement réel, incertain et mesurable**, pas seulement lancer une simulation ou configurer Nav2.

## Ce sur quoi tu dois te concentrer

### 1. Le transfert simulation → robot réel

C'est le meilleur axe différenciant pour ton profil Isaac Sim/Gazebo.

Tu dois savoir traiter :

- les écarts entre capteurs simulés et capteurs réels ;
- le bruit, les latences, les pertes de messages et les fréquences différentes ;
- la calibration caméra/LiDAR/IMU et les transformations TF ;
- la reproductibilité des scénarios ;
- la validation d'un même stack en simulation puis sur robot ;
- le *sim-to-real gap* et la *domain randomization* ;
- l'analyse des échecs de navigation à partir des logs et des rosbag.

**Livrable à viser avant le PFE :** un projet où le même robot ROS 2 navigue dans Isaac Sim ou Gazebo puis sur une plateforme réelle, avec une comparaison chiffrée.

**Mesures à publier dans le portfolio :**

- taux de réussite des missions ;
- erreur de localisation ;
- distance et temps de parcours ;
- nombre de collisions ou d'interventions humaines ;
- fréquence de planification ;
- comportement lorsque les capteurs sont dégradés.

### 2. La perception et la localisation robustes

Tu ne dois pas te présenter uniquement comme « utilisateur de Nav2 ». Positionne-toi comme quelqu'un capable de rendre la navigation fiable grâce à une perception et une localisation robustes.

Travaille surtout sur :

- fusion LiDAR/caméra/IMU ;
- localisation dans des environnements dynamiques ;
- SLAM en environnement long, vaste ou changeant ;
- détection des obstacles réellement franchissables ou non franchissables ;
- perte temporaire de localisation et récupération ;
- changements de lumière, de saison, de texture et de géométrie ;
- comparaison de plusieurs approches avec un protocole expérimental sérieux.

**Livrable à viser :** une étude expérimentale reproductible comparant deux ou trois méthodes de localisation/SLAM sur plusieurs environnements, avec un rapport expliquant les causes d'échec.

### 3. La navigation autonome complète, de la mission à la sécurité

Va au-delà de « le robot atteint un objectif ». Montre que tu comprends une autonomie complète :

1. mission et objectifs ;
2. perception ;
3. localisation ;
4. planification globale ;
5. planification locale ;
6. évitement dynamique ;
7. récupération après échec ;
8. retour dans un état sûr ;
9. évaluation des performances.

Les sujets à approfondir sont :

- navigation dans des environnements dynamiques ;
- comportement en cas d'obstacle imprévisible ;
- détection de blocage et récupération ;
- planification sous contraintes de sécurité ;
- supervision et états dégradés ;
- validation par scénarios adverses.

**Livrable à viser :** une démonstration où le robot ne se contente pas de naviguer, mais détecte ses propres échecs et applique une stratégie de récupération documentée.

### 4. La robotique multimodale située

Ton expérience avec les LLM, VLM, TTS, STT, YOLO et un robot interactif peut devenir un avantage majeur, à condition de la relier à l'autonomie physique du robot.

Ne te présente pas comme quelqu'un qui ajoute simplement un chatbot à un robot. Montre une boucle complète :

1. l'humain parle ou fait un geste ;
2. le robot comprend la demande et le contexte visuel ;
3. le système vérifie si l'action est possible et sûre ;
4. un planificateur transforme l'intention en actions ROS 2 typées ;
5. le robot navigue et agit ;
6. le robot explique son état ou demande une clarification ;
7. le système journalise l'action, le résultat et l'échec éventuel.

À approfondir :

- ancrage des références en langage (« cette personne », « l'objet rouge ») dans la perception ;
- séparation entre décision du modèle et contrôleurs déterministes ;
- validation des commandes avant exécution ;
- gestion des ambiguïtés, interruptions et demandes impossibles ;
- mémoire de tâche et contexte de dialogue ;
- mode dégradé si le modèle, le réseau ou un capteur échoue ;
- latence, coût GPU, confidentialité et observabilité.

**Règle de sécurité :** un LLM/VLM ne doit jamais envoyer directement une commande moteur. Il produit une intention ou un plan contraint, exécuté par des nœuds ROS 2 déterministes avec validation.

**Livrable à viser :** une démonstration reproductible « langage + vision + navigation + action », avec taux de réussite, latence bout en bout, taux de clarification et taux de commandes refusées.

### 5. La validation expérimentale et l'ingénierie de recherche

Les laboratoires et les équipes R&D recherchent des personnes qui savent produire des résultats défendables.

Tu dois savoir :

- formuler une hypothèse ;
- définir un protocole de test ;
- choisir des métriques pertinentes ;
- constituer des jeux de scénarios ;
- séparer entraînement, réglage et évaluation ;
- comparer équitablement deux méthodes ;
- expliquer les limites et les cas d'échec ;
- rédiger un rapport technique ou un article court.

**Résultat attendu dans ton CV :** des phrases avec des chiffres, par exemple :

> « Évaluation de trois pipelines de localisation sur quatre environnements ; amélioration du taux de mission réussie de X % à Y % et analyse des échecs liés aux obstacles dynamiques. »

Remplace les formulations vagues comme « utilisation de ROS 2 et Isaac Sim ».

### 6. L'intégration sur une vraie plateforme robotique

Pour obtenir une opportunité après le PFE, l'expérience la plus valorisante sera l'intégration sur un robot réel :

- LiDAR, caméra RGB-D, IMU, encodeurs ;
- contraintes CPU/GPU et temps réel ;
- synchronisation des capteurs ;
- câblage et interfaces ;
- calibration ;
- observation des défauts matériels ;
- essais terrain ;
- maintenance et diagnostic.

Si tu dois choisir entre un projet uniquement simulé et un projet qui comprend une vraie campagne d'essais, choisis le second.

## La preuve technique à préparer

Ton portfolio doit présenter une seule démonstration principale, sous trois angles :

### Vue recruteur — 60 secondes

Une vidéo montre : instruction vocale, compréhension visuelle, navigation, action, réponse vocale et gestion d'un obstacle.

### Vue ingénieur — 5 minutes

Un schéma montre les nœuds ROS 2, les interfaces, les garde-fous, les flux caméra/audio, le planificateur et les contrôleurs.

### Vue chercheur — 10 minutes

Un rapport montre le protocole, les baselines, les métriques, les ablations et les échecs.

Les métriques minimales sont :

- taux de réussite de tâche ;
- taux de fausse compréhension et taux de clarification ;
- taux de refus corrects ;
- latence STT → décision → action ;
- taux de collision et d'intervention humaine ;
- robustesse au bruit audio, aux accents, aux objets inconnus et aux changements de scène ;
- coût mémoire et GPU.

## Les cibles sur lesquelles te concentrer

Ne contacte pas douze organisations avec le même message. Concentre-toi sur les cinq axes suivants.

### Priorité 1 — CRIStAL / Université de Lille

- **Pourquoi :** correspondance directe avec ton profil : ROS/ROS 2, perception, localisation, SLAM, cartographie, environnements réels et simulés, jumeau numérique.
- **Ce que tu dois proposer :** benchmark et déploiement d'un pipeline de localisation/perception sur plateforme réelle et simulation, avec mesures de robustesse.
- **Ce que tu dois vendre :** ta capacité à passer de la simulation à une expérimentation scientifique mesurée.
- **Source :** [offre CRIStAL](https://gdr-iasis.cnrs.fr/kiosque/deploiement-dalgorithmes-de-perception-et-de-localisation-sur-des-robots-mobiles-et-des-vehicules-intelligents-sous-ros-ros2/).

### Priorité 2 — ONERA / DTIS

- **Pourquoi :** environnement R&D exigeant, intéressant pour la perception, l'estimation, la navigation et la validation de systèmes autonomes.
- **Ce que tu dois proposer :** simulation réaliste, estimation robuste, navigation sous incertitude et protocole d'évaluation.
- **Ce que tu dois vendre :** rigueur scientifique, analyse des erreurs et capacité à valider un système dans des conditions dégradées.
- **Source :** [fiche ONERA DTIS-2026-32](https://w3.onera.fr/stages/sites/default/files/2025-10/DTIS-2026-32.pdf).

### Priorité 3 — Promise Robotics

- **Pourquoi :** très forte adéquation avec Isaac Sim, Gazebo, ROS 2, MoveIt2, perception et planification.
- **Ce que tu dois proposer :** génération de scénarios de simulation, validation de comportements de planification et transfert vers les cellules robotisées réelles.
- **Ce que tu dois vendre :** capacité à livrer du code testable et à diagnostiquer les problèmes d'intégration logiciel-matériel.
- **Source :** [offre Promise Robotics](https://jobs.lever.co/promiserobotics/120b526a-2491-4df5-a77a-6ca0ccb7e35a).
- **Point à vérifier :** demander explicitement si un PFE/co-op est possible, car l'offre consultée est intitulée « Robotics Software Developer ».

### Priorité 4 — ROZOR Robotics

- **Pourquoi :** travail directement lié à la navigation, la planification, la décision, la perception et l'autonomie de robots en bâtiments réels.
- **Ce que tu dois proposer :** navigation robuste en intérieur, gestion des obstacles dynamiques, tests terrain et analyse des échecs.
- **Ce que tu dois vendre :** un profil capable de relier simulation, algorithmes et déploiement réel.
- **Source :** [programme de stages ROZOR](https://rozor.ai/careers/internship-program/).

### Priorité 5 — un laboratoire canadien de navigation avancée

Choisis **une** cible principale, pas toutes :

- [ASRL — University of Toronto](https://asrl.utias.utoronto.ca/~tdb/) si tu veux approfondir localisation, cartographie et navigation visuelle ;
- [Carleton RNCSL](https://carleton.ca/rncsl/research-openings/) si tu veux approfondir navigation, estimation, contrôle et expérimentation avec robots mobiles ;
- [Polytechnique Montréal](https://www.polymtl.ca/robotique-mobile/en) si tu veux travailler sur perception, planification et décision en environnement partagé.

**Critère de choix :** sélectionne le laboratoire dont les publications et plateformes expérimentales correspondent au sujet que tu peux défendre, pas celui qui cite le plus d'outils dans sa page web.

## Le positionnement qui peut réellement te faire décrocher un PFE

Ton profil combine deux familles souvent séparées :

- **autonomie physique :** perception, localisation, navigation, simulation et robot réel ;
- **interaction intelligente :** langage, vision, voix, planification de tâches et interaction humain-robot.

Utilise ce positionnement :

> **Ingénieur robotique autonome multimodale : intégration ROS 2 de perception, navigation et interaction langage-vision, avec validation en simulation et sur robot réel.**

Évite « expert IA, robotique et LLM » : cela ressemble à une liste de technologies sans profondeur.

### Les trois sujets de PFE à rechercher

1. **Robot mobile multimodal en environnement dynamique** — comprendre une demande, identifier les éléments concernés, planifier une mission, naviguer, interagir et rendre compte du résultat.
2. **VLM relié à l'autonomie** — ancrer des instructions en langage dans la perception et les actions d'un robot mobile avec garde-fous et évaluation systématique.
3. **Architecture robuste de décision multimodale** — simulation, tests, observabilité, sécurité et déploiement réel d'une architecture ROS 2.

Les mots-clés de recherche à ajouter sont : `embodied AI`, `multimodal robotics`, `human-robot interaction`, `robot learning`, `vision-language models`, `robot perception` et `service robotics`.

### Cibles supplémentaires cohérentes

- [McGill Mobile Robotics Lab / Mila](https://cim.mcgill.ca/~mrl/) pour perception, apprentissage robotique et adaptation ;
- [University of Toronto Robotics Institute](https://robotics.utoronto.ca/) pour robotique autonome et interaction ;
- [University of Waterloo RoboHub](https://uwaterloo.ca/robohub/robotics-waterloo/labs-centres-institutes) pour robot learning, perception et systèmes autonomes.

Pour chaque équipe, lis deux publications récentes avant d'écrire. Propose une extension expérimentale réalisable en cinq ou six mois, pas une liste de modèles.

## Le projet personnel à construire avant les candidatures

Construis **un seul projet profond**, au lieu de plusieurs démonstrations superficielles.

### Projet recommandé

**Robot mobile multimodal : comprendre une instruction humaine, percevoir son environnement, naviguer et exécuter une tâche de manière sûre.**

Le projet doit contenir :

- un robot différentiel ou omnidirectionnel ;
- un modèle Isaac Sim ou Gazebo ;
- un pipeline ROS 2/Nav2 ;
- LiDAR et caméra RGB-D simulés ;
- localisation et cartographie ;
- obstacles statiques et dynamiques ;
- un pipeline STT/TTS et un LLM/VLM ;
- un catalogue d'actions ROS 2 typées, limitées et validées ;
- YOLO ou une perception équivalente reliée à une scène et à une tâche ;
- une politique explicite de refus et de demande de clarification ;
- scénarios de perte ou de dégradation capteur ;
- stratégie de récupération ;
- comparaison simulation/réel si une plateforme est disponible ;
- mesures automatiques ;
- tests de latence, robustesse et sécurité des sorties modèle ;
- vidéo de démonstration ;
- rapport technique de 8 à 12 pages ;
- dépôt reproductible et propre.

### Ce que le projet doit prouver

À la fin, une personne doit pouvoir comprendre immédiatement que tu sais :

- concevoir une architecture d'autonomie ;
- intégrer plusieurs capteurs ;
- diagnostiquer une défaillance ;
- transformer une intention humaine ambiguë en action robotique vérifiable ;
- mesurer la performance ;
- justifier un choix technique ;
- transférer un comportement vers un robot réel ;
- communiquer un résultat d'ingénierie ou de recherche.

## Ce que tu ne dois plus prioriser

Ne consacre pas les prochains mois à produire des tutoriels supplémentaires sur :

- Git ;
- Docker ;
- Linux ;
- ROS/ROS 2 élémentaire ;
- création basique de nœuds ;
- lancement standard de Nav2 ;
- configuration simple de MoveIt ;
- création d'un monde Gazebo sans protocole d'évaluation ;
- simple démonstration « le robot suit une trajectoire » ;
- intégration d'un LLM sans tâche robotique mesurable ;
- démonstration où le modèle appelle directement un contrôleur sans validation ;
- multiplication de modèles ou frameworks sans comparaison ;
- ajout de TTS/STT uniquement pour produire un effet spectaculaire ;

Ces éléments doivent apparaître comme des moyens dans ton projet, pas comme le sujet principal de ton CV.

## Le profil professionnel à viser

Présente-toi comme :

> **Ingénieur robotique autonome multimodale, spécialisé dans l'intégration ROS 2 de perception, localisation, navigation et interaction langage-vision, avec validation en simulation et sur robot réel.**

Évite de te présenter uniquement comme :

> « Étudiant maîtrisant ROS, Gazebo et Isaac Sim. »

La première formulation décrit une valeur professionnelle. La seconde décrit seulement une liste d'outils.

## Planning recommandé pour un PFE 2027

### Maintenant — 3 mois

- choisir un seul axe principal : autonomie multimodale, transfert sim-to-real ou localisation robuste ; les autres doivent le soutenir ;
- finaliser le projet personnel ;
- produire des métriques et une vidéo ;
- publier un dépôt GitHub présentable ;
- identifier les encadrants et équipes correspondant exactement à cet axe.

### 3 à 6 mois avant le stage

- envoyer des candidatures ciblées à CRIStAL, ONERA, Promise, ROZOR et un laboratoire canadien ;
- adapter le sujet proposé à chaque équipe ;
- joindre un CV court, le dépôt, la vidéo et une fiche de sujet d'une page ;
- demander explicitement les plateformes robotiques, capteurs, simulateurs et objectifs expérimentaux disponibles ;
- présenter ton robot interactif comme une preuve d'intégration et non comme une liste de modèles ;
- rechercher aussi les sujets « embodied AI », « multimodal robotics », « human-robot interaction » et « vision-language models ».

### Pendant les entretiens

Prépare des réponses concrètes à ces questions :

1. Comment diagnostiques-tu une dérive de localisation ?
2. Comment mesures-tu le *sim-to-real gap* ?
3. Que fais-tu si Nav2 échoue dans un environnement dynamique ?
4. Comment choisis-tu entre LiDAR, caméra et fusion de capteurs ?
5. Comment distingues-tu un problème d'algorithme d'un problème de calibration ou de synchronisation ?
6. Comment construis-tu un protocole de comparaison reproductible ?
7. Quel est ton résultat quantitatif le plus important ?
8. Comment empêches-tu un LLM/VLM de produire une action dangereuse ou incohérente ?
9. Que se passe-t-il lorsque le STT est faux, que la vision est incertaine ou que le robot ne peut pas exécuter la demande ?

## Le résultat qui donnera un très bon CV

Le meilleur PFE pour toi n'est pas celui qui ajoute dix outils à ta liste. C'est celui qui te permet d'écrire :

> « Conception et validation d'une architecture ROS 2 de robotique multimodale reliant STT/TTS, VLM/LLM, perception YOLO et navigation autonome ; exécution de tâches d'interaction langage-vision sur robot mobile en simulation puis sur plateforme réelle, avec évaluation de la latence, du taux de réussite et des refus de sécurité. »

Cherche donc en priorité un sujet qui garantit :

1. un robot réel ou une plateforme expérimentale sérieuse ;
2. une partie recherche ou R&D identifiable ;
3. des données et des essais mesurables ;
4. un encadrant expert en autonomie mobile ;
5. une possibilité de poursuivre en CDI, doctorat, contrat de recherche ou collaboration.

## Décision finale

Si tu dois concentrer tous tes efforts sur une seule direction, choisis :

> **Perception et localisation robustes pour la navigation autonome, avec validation Isaac Sim/Gazebo puis déploiement sur robot réel.**

C'est le point de rencontre le plus fort entre tes compétences actuelles, les besoins des laboratoires et la valeur recherchée par les entreprises de robotique autonome.

Si tu veux exploiter au maximum ton avantage actuel, la variante la plus forte est :

> **Interaction langage-vision sûre pour robot mobile autonome, avec perception multi-capteurs, navigation ROS 2 et validation simulation-réel.**
