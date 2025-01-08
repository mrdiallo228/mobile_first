
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi par défaut
  const reason = document.getElementById("reason").value;

  if (reason === "") {
    alert("Veuillez sélectionner une raison pour votre prise de contact !");
  } else {
    alert("Votre message a été envoyé avec succès !");
    // Ici, on peut ajouter une fonction pour envoyer les données au serveur
  }
});

/*----GESTION DU MENU GURGER------*/