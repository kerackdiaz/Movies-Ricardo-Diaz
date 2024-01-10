const images = movies.map(movie => movie.image);
const titles = movies.map(movie => movie.title);

const randomIndices = [];

while (randomIndices.length < 5) {
  const randomIndex = Math.floor(Math.random() * images.length);
  if (!randomIndices.includes(randomIndex)) {
    randomIndices.push(randomIndex);
  }
}

const randomImages = randomIndices.map(index => images[index]);
const randomTitles = randomIndices.map(index => titles[index]);

const totalImages = randomImages.length;
let currentIndex = 0;

const updateCarousel = () => {
  const imageContainer = document.getElementById('carousel-image');
  imageContainer.style.backgroundImage = `url('${randomImages[currentIndex]}')`;

  const titleMovies = document.getElementById('titleMovies');
  titleMovies.textContent = randomTitles[currentIndex]; 

  const indexInfo = document.getElementById('index-info');
  indexInfo.innerHTML = `${currentIndex + 1} / ${totalImages}`;
};

const leftBtn = document.getElementById('left-Btn');
const rightBtn = document.getElementById('rigth-Btn');

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

updateCarousel();
