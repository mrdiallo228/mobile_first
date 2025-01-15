 /*----GESTION DU MENU GURGER------*/
 var sidenav = document.getElementById("mySidenav");
 var openBtn = document.getElementById("openBtn");
 var closeBtn = document.getElementById("closeBtn");
 
 openBtn.onclick = openNav;
 closeBtn.onclick = closeNav;
 
 /* pour bouton menu (ouverture)*/
 function openNav() {
   sidenav.classList.add("active");
 }
 
 /* pour le bouton menu burger(fermeture) */
 function closeNav() {
   sidenav.classList.remove("active");
 }
 
 
 //---------------------------------------------CARROUSEL
 document.querySelectorAll('.carousel').forEach(carousel => {
   const prevButton = carousel.querySelector('.prev');
   const nextButton = carousel.querySelector('.next');
   const slides = carousel.querySelectorAll('.slide');
   const carouselInner = carousel.querySelector('.carousel-inner');  // Sélectionner la partie interne du carrousel
   let currentIndex = 0;
 
   function updateCarousel() {
       // Calculer le décalage pour le défilement des images
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
 
 //---------------------------gestion du formulaire de contact
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
 
 
 