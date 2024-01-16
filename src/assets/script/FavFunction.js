import { allMovies } from "./apiRequest.js";
import { storedFavorites } from "./script.js";
import { createCard } from "./DrawCards.js";

export let favMovies = [];
export function favorite() {
    const $favDiv = document.getElementById('MyMovies');
    if (Array.isArray(storedFavorites)) {
        favMovies = storedFavorites;

    }
    createCard(favMovies, $favDiv);
    const $addTofav = document.querySelectorAll('[id^="fav_"]');

    $addTofav.forEach((favB) => {
        favB.addEventListener('click', (e) => {
            let id = favB.id.replace("fav_","");
            console.log(id);
            let favMovie = allMovies.find((movie) => movie.id == id);
            console.log(favMovie)
            let isAlreadyAdded = favMovies.some((fav) => fav.id == favMovie.id);

            if (isAlreadyAdded) {
                favMovies = favMovies.filter((fav) => fav.id !== favMovie.id);
                console.log('Película eliminada de favoritos:', favMovie);
                const svgElement = favB.querySelector('svg');
                if (svgElement) {
                    console.log(svgElement)
                    svgElement.classList.remove('hover:fill-red-600', 'fill-gray-300');
                    svgElement.classList.add('hover:fill-gray-300', 'fill-red-600');
                }
            } else {
                favMovies.push(favMovie);
                console.log('Película añadida a favoritos:', favMovies);
                const svgElement = favB.querySelector('svg');
                if (svgElement) {
                    svgElement.classList.add('hover:fill-red-600', 'fill-gray-300');
                    svgElement.classList.remove('hover:fill-gray-300', 'fill-red-600');
                }
            }
            localStorage.setItem("favoritos", JSON.stringify(favMovies));
        });
    });

    storedFavorites.forEach((Mymovs) => {
        let btnFav = "fav_" + Mymovs.id

            let btnsfav=document.getElementById(btnFav)

            if(btnsfav){
                const svgElement = btnsfav.querySelector('svg');
                svgElement.classList.remove('hover:fill-red-600', 'fill-gray-300');
                svgElement.classList.add('hover:fill-gray-300', 'fill-red-600');
            }
    });

}

