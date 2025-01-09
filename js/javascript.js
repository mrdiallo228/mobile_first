 
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
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
