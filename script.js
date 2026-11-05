import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

const projects = [
  ["01", "Navigation autonome 2D", "SLAM Toolbox · EKF · AMCL · Nav2", "Cartographie, localisation et navigation robuste dans des environnements statiques et dynamiques.", "Simulation → robot réel"],
  ["02", "Cartographie 3D", "RTAB-Map · LiDAR 3D · RGB-D", "Reconstruction 3D, fermeture de boucle et comparaison avec une carte 2D.", "Carte 3D exploitable"],
  ["03", "Bras robotique 6 DOF", "ROS 2 · MoveIt2 · URDF/Xacro", "Cinématique directe et inverse, planification de trajectoires et contraintes articulaires.", "Trajectoires sans collision"],
  ["04", "Fusion multi-capteurs", "LiDAR · IMU · RGB · robot_localization", "Synchroniser et fusionner les observations pour une estimation de pose plus stable.", "Pose estimée en temps réel"],
  ["05", "Détection de panneaux", "CNN · OpenCV · Raspberry Pi", "Détection embarquée de panneaux pour enrichir la perception d'une voiture autonome.", "Inférence edge"],
  ["06", "Poursuite de personne", "YOLOv8-pose · Depth Anything V2 · fuzzy", "De la perception monoculaire à la commande d'un robot unicycle avec couche de sécurité.", "25 règles floues · PSO"]
];

document.querySelector("#project-grid").innerHTML = projects.map(([n, title, stack, desc, metric]) => `
  <article class="project-card reveal">
    <span class="index">${n} / PROJECT</span>
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="stack">${stack}</div>
    <div class="metric">↳ ${metric}</div>
    <div class="links"><a href="https://github.com/lacinasidibe114-sudo/lacina-portfolio" target="_blank" rel="noreferrer">Voir le dépôt ↗</a></div>
  </article>
`).join("");

document.querySelectorAll(".tab-button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tab-button").forEach(item => item.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.add("hidden"));
  button.classList.add("active");
  document.querySelector(`[data-panel="${button.dataset.tab}"]`).classList.remove("hidden");
}));

document.querySelectorAll(".reveal").forEach(element => inView(element, () => {
  animate(element, { opacity: [0, 1], transform: ["translateY(22px)", "translateY(0)"] }, { duration: .7, easing: "ease-out" });
}, { amount: .15 }));

const progress = document.querySelector(".scroll-progress");
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
