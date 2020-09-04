const videCard = document.getElementsByClassName(hero__videoCard);

const imageCard = document.getElementsByClassName(hero__imageCard);

imageCard.addEventListener("mouseover", () => (videCard.style.width = "15%"));
imageCard.addEventListener("mouseleave", () => (videCard.style.width = "25%"));
