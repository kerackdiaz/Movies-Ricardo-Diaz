import { allMovies } from "./apiRequest.js";
import { createCard, $section } from "./DrawCards.js";

const $cantItemsPerPage = document.getElementById('cantView');
let itemsPerPage = 12
let currentPage = 1;

export function pagination() {
        function createPagination(cantPages) {
            const $section = document.getElementById('navPag');
            if ($section) {
                $section.innerHTML = "";

                let pagHTML = `
            <ul id="navPag" class="inline-flex -space-x-px text-base h-10">
                <li>
                    <a id="back" href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
        `;

                for (let i = 1; i <= cantPages; i++) {
                    pagHTML += `
                <li>
                    <a id="page${i}"href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i}</a>
                </li>
            `;
                }

                pagHTML += `
                <li>
                    <a id="next" href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        `;

                $section.innerHTML = pagHTML;
            }
            const $pageId = $section.querySelectorAll('a');

            $pageId.forEach((page, i) => {
                page.addEventListener('click', () => {
                    switch (page.id) {
                        case 'page1':
                            console.log(i)
                            currentPage = i;
                            displayCurrentPage();

                            break;
                        case 'page' + (cantPages):
                            currentPage = i;
                            displayCurrentPage();
                            break;
                        case 'back':
                            currentPage--;
                            displayCurrentPage();
                            break;
                        case 'next':
                            currentPage++;
                            displayCurrentPage();
                            break;
                        default:
                            currentPage = i;
                            displayCurrentPage();
                    }
                    page.classList.add('bg-violet-500', 'text-white');
                    page.classList.remove('bg-white')
                }
                );
            });
        }


    
        function updateItemsPerPage() {
            itemsPerPage = $cantItemsPerPage.value;
            currentPage = 1; 
            const newCantPages = Math.ceil(allMovies.length / itemsPerPage);
            createPagination(newCantPages);
            displayCurrentPage();
        }
        function displayCurrentPage() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentMovies = allMovies.slice(startIndex, endIndex);
            createCard(currentMovies, $section);
            const $back = document.getElementById('back');
            const $next = document.getElementById('next');
            if (currentPage == 1) {
                $back.classList.add('hidden');
                $next.classList.remove('hidden');
            } else if (currentPage == cantPages) {
                $back.classList.remove('hidden');
                $next.classList.add('hidden');
            } else {
                $back.classList.remove('hidden');
            }
        }
        $cantItemsPerPage.addEventListener('change', updateItemsPerPage);
    
        const cantPages = Math.ceil(allMovies.length / itemsPerPage);
        createPagination(cantPages);
        displayCurrentPage();
    }