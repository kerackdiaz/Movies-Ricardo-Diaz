
import { allMovies } from "./apiRequest.js";
import { createCard, $section } from "./DrawCards.js";



export const $searchInput = document.querySelectorAll('input[type="search"]');
let inputValue = '';

export function SearchFilter(divContainer) {
    divContainer.forEach(search => {
        search.addEventListener("keyup", (e) => {
            inputValue = search.value.toLowerCase();
            applyFilters();
        });

        search.addEventListener('search', (e) =>{
            if(!$searchInput.value){
            inputValue = search.value.toLowerCase();
            applyFilters();
            }
        
        })
    });

}

export const $categoryDropdown = document.getElementById('categoryDropdown');
let allGenres = '';
let valueSelect = '';

export function updateGenresDropdown(divContainer) {
    if (divContainer) {
        const allCategories = allMovies.flatMap(movie => movie.genres);
        allGenres = [...new Set(allCategories)];

        divContainer.innerHTML = `<option value="">All Categories</option>`;
        allGenres.forEach(genre => {
            divContainer.innerHTML += `<option value="${genre}">${genre}</option>`;
        });

        divContainer.addEventListener('change', () => {
            valueSelect = $categoryDropdown.value.toLowerCase();
            applyFilters(); 
        });
    }
}


function applyFilters() {
    const resultSearch = allMovies.filter(movie => movie.title.toLowerCase().includes(inputValue));
    const resultSelect = valueSelect
        ? allMovies.filter((movie) => movie.genres.includes($categoryDropdown.value))
        : allMovies;
        const filteredMovies= resultSearch.filter((movie) => resultSelect.includes(movie));
        createCard(filteredMovies, $section)


}
updateGenresDropdown($categoryDropdown);
SearchFilter($searchInput);
