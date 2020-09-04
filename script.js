const videCard = document.querySelector(".hero__videoCard");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

img1.addEventListener("mouseover", () => (videCard.style.width = "15%"));
img1.addEventListener("mouseleave", () => (videCard.style.width = "25%"));

img2.addEventListener("mouseover", () => (videCard.style.width = "15%"));
img2.addEventListener("mouseleave", () => (videCard.style.width = "25%"));

img3.addEventListener("mouseover", () => (videCard.style.width = "15%"));
img3.addEventListener("mouseleave", () => (videCard.style.width = "25%"));

img4.addEventListener("mouseover", () => (videCard.style.width = "15%"));
img4.addEventListener("mouseleave", () => (videCard.style.width = "25%"));

img5.addEventListener("mouseover", () => (videCard.style.width = "15%"));
img5.addEventListener("mouseleave", () => (videCard.style.width = "25%"));
