import { allMovies } from "./apiRequest.js";

export const images = allMovies.map(movie => movie.image);
export const titles = allMovies.map(movie => movie.title);

const randomIndices = [];

while (randomIndices.length < 5) {
  const randomIndex = Math.floor(Math.random() * images.length);
  if (!randomIndices.includes(randomIndex)) {
    randomIndices.push(randomIndex);
  }
}

export const randomImages = randomIndices.map(index => images[index]);
export const randomTitles = randomIndices.map(index => titles[index]);

export const totalImages = randomImages.length;
export let currentIndex = 0;

export const updateCarousel = () => {
  const imageContainer = document.getElementById('carousel-image');
  imageContainer.style.backgroundImage = `url('${randomImages[currentIndex]}')`;

  const titleMovies = document.getElementById('titleMovies');
  titleMovies.textContent = randomTitles[currentIndex]; 

  const indexInfo = document.getElementById('index-info');
  indexInfo.innerHTML = `${currentIndex + 1} / ${totalImages}`;
};

export const leftBtn = document.getElementById('left-Btn');
export const rightBtn = document.getElementById('rigth-Btn');
if(leftBtn && rightBtn){
    leftBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    });
    
    rightBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    });
}