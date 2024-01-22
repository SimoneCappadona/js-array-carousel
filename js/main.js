const carouselImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const carouselSlide = document.getElementById("carousel-cont");

let carouselIndex = 0;

let carouselHtml = "";
for (let i = 0; i < carouselImg.length; i++) {
  const carousel = carouselImg[i];

  let activeImg = i == carouselIndex ? "active" : "";

  carouselHtml += `<img src="./img/${carousel}" alt="slide ${i}" class="carousel-img ${activeImg}">`;
}

carouselSlide.innerHTML += carouselHtml;

const nextImgEl = document.querySelector(".next-img");
const prevImgEl = document.querySelector(".prev-img");

nextImgEl.addEventListener("click", function () {
  const allCarouselImg = document.getElementsByClassName("carousel-img");
  const currentImg = allCarouselImg[carouselIndex];
  currentImg.classList.remove("active");

  if (carouselIndex >= carouselImg.length - 1) {
    carouselIndex = 0;
  } else {
    carouselIndex++;
  }

  const nextCarouselimg = allCarouselImg[carouselIndex];

  nextCarouselimg.classList.add("active");
});

prevImgEl.addEventListener("click", function () {
  const allCarouselImg = document.getElementsByClassName("carousel-img");
  const currentImg = allCarouselImg[carouselIndex];
  currentImg.classList.remove("active");

  if (carouselIndex <= 0) {
    carouselIndex = allCarouselImg.length - 1;
  } else {
    carouselIndex--;
  }

  const nextCarouselimg = allCarouselImg[carouselIndex];

  nextCarouselimg.classList.add("active");
});


// * Set interval per le immagini
setInterval(function () {
  const allCarouselImg = document.getElementsByClassName("carousel-img");
  const currentImg = allCarouselImg[carouselIndex];
  currentImg.classList.remove("active");

  if (carouselIndex >= carouselImg.length - 1) {
    carouselIndex = 0;
  } else {
    carouselIndex++;
  }

  const nextCarouselimg = allCarouselImg[carouselIndex];

  nextCarouselimg.classList.add("active");
}, 3000);
