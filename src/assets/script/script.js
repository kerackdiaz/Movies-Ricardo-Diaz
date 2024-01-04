/* function sllider */

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


document.addEventListener('alpine:init', () => {
  Alpine.data('slider', () => ({
    currentIndex: 1,
    images: randomImages,
    titles: randomTitles,
    back() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    next() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex = this.currentIndex + 1;
      } else if (this.currentIndex <= this.images.length) {
        this.currentIndex = this.images.length - this.currentIndex + 1
      }
    },
  }))
})





createCard(movies);

//create card

function createCard(data) {
  const section = document.getElementById('movies');
  if (section) {
    section.innerHTML = "";

    const cardHTML = data.reduce((dat, movie) => {
      return dat + `
        <article class="flex justify-center">
          <div class="w-80 dark:bg-white p-3 bg-gray-900">
            <img class="h-52 w-full object-cover" src="${movie.image}" alt="${movie.title}" />
            <h2 class="text-center font-bold font-bebas-neue capitalize my-4 text-2xl text-white dark:text-black">${movie.title}</h2>
            <p class="text-white dark:text-black text-base mb-2 text-center font-bold"> ${movie.tagline}</p>
            <p class="text-white dark:text-black">${movie.overview}</p>
          </div>
        </article>
      `;
    }, "");

    section.innerHTML = cardHTML;
  }
}






//mode dark / mode light

let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

let themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {


    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});