import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

const projects = [
  ["01", "Navigation autonome 2D", "SLAM Toolbox, EKF, AMCL, Nav2", "Cartographie, localisation et navigation robuste dans des environnements simulés.", "Navigation validée sur scénarios statiques et dynamiques", "https://github.com/", "youtube"],
  ["02", "Cartographie 3D", "RTAB-Map, LiDAR 3D, RGB-D", "Reconstruction 3D et comparaison de qualité avec une carte 2D.", "Carte 3D exploitable pour la navigation", "https://github.com/", "youtube"],
  ["03", "Bras robotique 6 DOF", "ROS 2, MoveIt2, URDF/Xacro", "Cinématique directe/inverse, planification et contraintes articulaires.", "Trajectoires sans collision", "https://github.com/", "youtube"],
  ["04", "Fusion multi-capteurs", "LiDAR, IMU, RGB, robot_localization", "Synchroniser et fusionner les observations pour une pose plus stable.", "Pose estimée en temps réel", "https://github.com/", "code"],
  ["05", "Détection de panneaux", "CNN, OpenCV, Raspberry Pi", "Détection embarquée de panneaux pour enrichir la perception du robot.", "Inférence edge sur Raspberry Pi", "https://github.com/", "code"],
  ["06", "Poursuite de personne", "YOLOv8-pose, Depth Anything V2, fuzzy", "De la perception monoculaire à la commande d’un robot unicycle.", "25 règles floues · couche de sécurité", "https://github.com/", "youtube"]
];
document.querySelector("#project-grid").innerHTML = projects.map(([n,title,stack,desc,metric,code,video]) => `
  <article class="project-card reveal"><span class="index">${n} / PROJECT</span><h3>${title}</h3><p>${desc}</p><div class="stack">${stack}</div><div class="metric">↳ ${metric}</div><div class="links"><a href="${code}" target="_blank" rel="noreferrer">Code ↗</a>${video === "youtube" ? '<a href="https://youtube.com/" target="_blank" rel="noreferrer">Vidéo ↗</a>' : ""}</div></article>
`).join("");

document.querySelectorAll(".tab-button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tab-button").forEach(item => item.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.add("hidden"));
  button.classList.add("active");
  document.querySelector(`[data-panel="${button.dataset.tab}"]`).classList.remove("hidden");
}));

document.querySelectorAll(".reveal").forEach(element => inView(element, () => {
  animate(element, { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0)"] }, { duration: .65, easing: "ease-out" });
}, { amount: .15 }));
