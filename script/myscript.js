/**
 * 
* * Consegna:
**Dato un array di oggetti letterali con:
**url dell’immagine
**titolo
**descrizione
**Creare un carosello come nella foto allegata.

**Milestone 0:
**Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
**costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

**Milestone 1: 
**Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
**per popolare dinamicamente il carosello.
**Al click dell'utente sulle frecce verso sinistra o destra,
**l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

**Milestone 2:
**Aggiungere il ciclo infinito del carosello. 
**Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, 
**la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura 
**se l'utente clicca la freccia verso il basso.

/*
//BONUS 1:
//Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) 
l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

 * 
 */


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let carousel = document.querySelector(".carousel");

let activeIndex = 0;

//CREO I MIEI DIV CAROUSEL-ITEMS
let slide = images.forEach(element => {
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item")

    let h2 = document.createElement("h2");
    h2.append(element.title);

    let p = document.createElement("p");
    p.append(element.text);

    let img = document.createElement("img");
    img.src = element.image;
    img.alt = `image of ${element.title}`;

    carousel.append(carouselItem);
    carouselItem.append(h2);
    carouselItem.append(p);
    carouselItem.append(img);
    
});

//INSERISCO L'IMMAGINE CHE VOGLIO CHE SI VISUALIZZI PER PRIMA (activeIndex)
document.querySelectorAll("div.carousel-item")[activeIndex].classList.add("active");


//AZIONE SE CLICCO FRECCIA PER ANDARE INDIETRO
let bottomBefore = document.querySelector(".preview-button");

bottomBefore.addEventListener("click", function(){

    if(activeIndex == 0){
        activeIndex = images.length - 1;
    }
    else{
        activeIndex = activeIndex - 1;
    }
    document.querySelector("div.carousel-item.active").classList.remove("active");
    document.querySelectorAll("div.carousel-item")[activeIndex].classList.add("active");
});

//AZIONE SE CLICCO FRECCIA PER ANDARE AVANTI
let bottomAfter = document.querySelector(".afterview-button");

bottomAfter.addEventListener("click", function(){
    if(activeIndex == images.length - 1){
        activeIndex = 0;
    }
    else{
        activeIndex = activeIndex + 1;
    }
    document.querySelector("div.carousel-item.active").classList.remove("active");
    document.querySelectorAll("div.carousel-item")[activeIndex].classList.add("active");
});

//CAROUSEL IN AUTOMATICO
function cambiaSlide() {
    const slides = document.querySelectorAll(".carousel-item");
    console.log(slides);

    slides.forEach(element => {
        element.classList.remove("active");
    });
    
    indiceSlide++;
    if (indiceSlide >= slides.length) {
        indiceSlide = 0;
    }
  
    slides[indiceSlide].classList.add('active');
}
  

  let indiceSlide = 0;
  //cambiaSlide();  
  setInterval(cambiaSlide, 4000, );