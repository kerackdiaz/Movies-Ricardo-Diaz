export const $section = document.getElementById('movies');

export function createCard(data, $section) {

    if ($section) {
        $section.innerHTML = "";
        const cardHTML = data.reduce((html, movie) => {
            return `${html}
        <article class="relative flex flex-col justify-between shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm w-80 dark:bg-white bg-gray-900 hover:scale-110">
        <button id="fav_${movie.id}" class="hover:text-white text-gray-500  hover:fill-red-600 absolute z-30 top-2 right-0 mt-2 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hover:fill-red-600 fill-gray-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
        <img class="h-52 w-full object-cover" src="${movie.image}" alt="${movie.title}" />
        <h2 class="text-center max-h-16 min-h-2 font-bold font-bebas-neue capitalize my-4 text-2xl text-white dark:text-black">${movie.title}</h2>
        <p class="text-white dark:text-black text-base mb-2 px-3 text-center font-bold"> ${movie.tagline}</p>
        <p class="text-white dark:text-black px-5 text-justify mb-6 line-clamp-2">${movie.overview}</p>
        <a href="./movie.html?id=${movie.id}" class="text-center text-white w-1/4 border-2 border-white rounded-sm my-6 mx-auto"> See More</a>
        </article>
      `;
        }, "");

        $section.innerHTML = cardHTML;
    }

}
