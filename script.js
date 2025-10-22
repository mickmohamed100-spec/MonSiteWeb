// Attend que tout le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", () => {

    // La liste de vos emojis de sport
    const sportsEmojis = [
        '⚽️', '🏀', '⚾️', '🥎', '🏐', '🏈', '🏉', '🎱' // 🎱 pour le 8ème
    ];

    // Une variable pour suivre l'étape de l'animation
    let etapeActuelle = 0;

    // 2. Créer une fonction pour animer
    function animerLoader() {
        
        // S'il n'y a plus d'étapes (on a fait les 8), on arrête
        if (etapeActuelle >= sportsEmojis.length) {
            clearInterval(animationInterval); // Arrêter la boucle
            return; // Quitter la fonction
        }

        // Sélectionner le bon point (ex: "dot-1", "dot-2", etc.)
        let dot = document.getElementById(`dot-${etapeActuelle + 1}`);

        if (dot) {
            // Mettre l'emoji dans le point
            dot.textContent = sportsEmojis[etapeActuelle];
            // Ajouter la classe "active" pour le faire apparaître (voir CSS)
            dot.classList.add("active");
        }

        // Passer à l'étape suivante
        etapeActuelle++;
    }

    // 3. Lancer l'animation
    // Appelle la fonction "animerLoader" toutes les 400 millisecondes
    const animationInterval = setInterval(animerLoader, 400);

});
