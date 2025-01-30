 /*----**********GESTION DU MENU BURGER************************------*/
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {  /* pour bouton menu (ouverture) */
  sidenav.classList.add("active");
}

function closeNav() {   /* pour le bouton menu burger(fermeture) */
  sidenav.classList.remove("active");
}

/*----*********************GESTION DE LA METEO************************--------*/
const apiKey = '7b69f8df42046728f5a5214a1f96f8ae'; //la clé API OpenWeatherMap
    const ville = 'Strasbourg'; //  choixde la ville à afficher

    // URL de l'API OpenWeatherMap
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

    function afficherMeteo(data) {
        const location = document.getElementById("localisation");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");
        const humidity = document.getElementById("humidity");

        location.textContent = `Ville: ${data.name}`;
        temperature.textContent = `Température: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidité: ${data.main.humidity}%`;
    }

    function obtenirMeteo() {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => afficherMeteo(data))
            .catch(error => {
                console.error('Erreur:', error);
                document.getElementById("meteo").innerHTML = "<p>Impossible de récupérer les données météo.</p>";
            });
    }
    window.onload = obtenirMeteo;  // Appeler la fonction pour charger la météo dès que la page est chargée
    
/*---------*************fonctionnalité AJAX******************----------------*/

const container = document.querySelector(".container-comment");

fetch("http://127.0.0.1:5500//db.json")
.then(function(response){
    return response.json()
})
.then(function(data){

    let html = "";

    data.forEach(function(user){
        html += `
        <div class="card">
            <p><em>Nom</em> : ${user.nom}</p>
            <p> <em>Commentaire</em> : ${user.commentaire}</p>
             <p><em>Service</em> : ${user.categorie}</p>
            <p><em>Date</em> : ${user.date}</p>
        </div> `
    })
    console.log(html)

    container.innerHTML = html;
})

/*-----------************CARROUSEL************************------------------*/
document.querySelectorAll('.carousel').forEach(carousel => {
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const slides = carousel.querySelectorAll('.slide');
  const carouselInner = carousel.querySelector('.carousel-inner');  // Sélectionner la partie interne du carrousel
  let currentIndex = 0;

  function updateCarousel() { // Calculer le décalage pour le défilement des images
    const offset = -currentIndex * 100;  // La largeur de chaque diapositive est de 100% de l'élément parent
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  // Gérer le clic sur le bouton précédent
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  // Gérer le clic sur le bouton suivant
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });
});

/*------**************gestion du formulaire de contact*********-------------*/
const contactForm = document.getElementById("contactForm");

if(contactForm != null){
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut
    const reason = document.getElementById("reason").value;
  
    if (reason === "") {
      alert("Veuillez sélectionner une raison pour votre prise de contact !");
    } else {
      alert("Votre message a été envoyé avec succès !");
      // Ici, on peut ajouter une fonction pour envoyer les données au serveur
    }
  });
}