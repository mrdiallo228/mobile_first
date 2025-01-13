 


/*----GESTION DU MENU GURGER------*/
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* ouverture du menu burger*/
function openNav() {
  sidenav.classList.add("active");
}

/* fermeture du menu burger */
function closeNav() {
  sidenav.classList.remove("active");
}

/*---formulaire de contact----*/

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi par défaut
  const reason = document.getElementById("reason").value;

  if (reason === "") {
    alert("Veuillez sélectionner une raison pour votre prise de contact !");
  } else {
    alert("Votre message a été envoyé avec succès !");
    // Ici, on peut ajouter une fonction pour envoyer les données au serveur
  }
})



