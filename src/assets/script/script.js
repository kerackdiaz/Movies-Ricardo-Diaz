import {$searchInput, SearchFilter, $categoryDropdown, updateGenresDropdown} from "./FilterData.js"
import { pagination, } from "./Pagination.js"
import { favorite} from "./FavFunction.js"
import { theme } from "./darkmode.js";
import { images, titles, randomImages, randomTitles, totalImages, currentIndex, updateCarousel, leftBtn, rightBtn } from './slider.js';

theme()
/*----Pagination----*/

const favIsReady = document.getElementById('movies')

if(favIsReady){
    pagination();
}
/*----Add to Favorites----*/
export const $addTofav = document.querySelectorAll('[id^="fav"]');

export const storedFavorites = JSON.parse(localStorage.getItem('favoritos'));


favorite();

/*----filter----*/
updateGenresDropdown($categoryDropdown);
SearchFilter($searchInput);

const $bannerIsReady = document.getElementById('banner')
if($bannerIsReady){
    updateCarousel();
}