const navLinks = document.querySelectorAll('nav a, header p');
const HeaderLogo = document.querySelector('header img');
const header = document.querySelector('header');
let selectedGenre = null;

//modify style in header

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    HeaderLogo.classList.add('hidden');
    searchIcon.classList.remove('hidden');
    const body = document.body;
    const isHomePage = body.classList.contains('home');

    if (isHomePage) {

    } else {


      searchIcon.innerHTML = `
      <button id="searchIcon" type="button" class="dark:text-white text-black hover:scale-150 text-2xl">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    `;
    }
  } else {
    HeaderLogo.classList.remove('hidden');
    searchIcon.classList.add('hidden');

  };
});


let inputExists = false;


//create div of search input
function createSearchInput(parentElement) {
  const inputSearch = document.createElement('input');
  inputSearch.setAttribute('type', 'search');
  inputSearch.setAttribute('name', 'searchSticky');
  inputSearch.setAttribute('placeholder', 'Search the movie:');

  inputSearch.classList.add('mx-3', 'border-b-2', 'dark:bg-black', 'placeholder:text-gray-500', 'focus:outline-none', 'text-black', 'dark:text-white', 'h-12');

  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('flex', 'justify-center', 'w-full');
  searchWrapper.setAttribute('id', 'contentSearch')
  searchWrapper.appendChild(inputSearch);

  parentElement.appendChild(searchWrapper);
  return inputSearch;
}

const navSearch = document.querySelector('header nav');
const searchIcon = document.createElement('div');
navSearch.appendChild(searchIcon);



const searchInputs = document.querySelectorAll('input[type="search"]');
let searchQuery = '';

//update search
function updateSearchInputs(value) {
  searchInputs.forEach(input => {
    input.value = value;
  });
}

// draw search in header
searchIcon.addEventListener('click', function () {
  if (!inputExists) {
    const inputSearch = createSearchInput(header);
    inputExists = true;
    searchIcon.classList.add('hidden');

    inputSearch.addEventListener('keyup', function (event) {
      searchQuery = event.target.value.toLowerCase();
      updateSearchInputs(searchQuery);

      const filteredMovies = movies.filter(movie => {
        return (
          (movie.title.toLowerCase().includes(searchQuery) ||
            movie.overview.toLowerCase().includes(searchQuery)) &&
          (!selectedGenre || movie.genres.includes(selectedGenre))
        );
      });

      createCard(filteredMovies, selectedGenre);
    });
  }
});

searchInputs.forEach(input => {
  input.addEventListener('keyup', function (event) {
    searchQuery = event.target.value.toLowerCase();
    updateSearchInputs(searchQuery);

    const filteredMovies = movies.filter(movie => {
      return (
        (movie.title.toLowerCase().includes(searchQuery) ||
          movie.overview.toLowerCase().includes(searchQuery)) &&
        (!selectedGenre || movie.genres.includes(selectedGenre))
      );
    });

    createCard(filteredMovies, selectedGenre);
  });
});


//create filter dropdown

const allGenres = movies.reduce((genres, movie) => {
  movie.genres.forEach(genre => {
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });
  return genres;
}, []);

function createGenres(allGenres) {
  const section = document.getElementById('categoryDropdown');
  if (section) {
    section.innerHTML = `<option value="">All Categories</option>`;
    allGenres.forEach(genre => {
      section.innerHTML += `<option value="${genre}">${genre}</option>`;
    });

    section.addEventListener('change', function () {
      selectedGenre = section.value;
      createCard(movies, selectedGenre);
    });
  }
}

// draw cards

function createCard(dat, genreFilter = null) {
  const section = document.getElementById('movies');
  if (section) {
    section.innerHTML = "";

    let filteredMovies = dat;
    if (genreFilter) {
      filteredMovies = dat.filter(movie => movie.genres.includes(genreFilter));
    }

    const cardHTML = filteredMovies.reduce((data, movie) => {
      return data + `
        <article class="flex justify-center">
          <a href="./movie.html?id=${movie.id}" class="w-80 dark:bg-white p-3 bg-gray-900">
            <img class="h-52 w-full object-cover" src="${movie.image}" alt="${movie.title}" />
            <h2 class="text-center font-bold font-bebas-neue capitalize my-4 text-2xl text-white dark:text-black">${movie.title}</h2>
            <p class="text-white dark:text-black text-base mb-2 text-center font-bold"> ${movie.tagline}</p>
            <p class="text-white dark:text-black line-clamp-3">${movie.overview}</p>
          </a>
        </article>
      `;
    }, "");

    section.innerHTML = cardHTML;
  }
}


createGenres(allGenres);
createCard(movies);
