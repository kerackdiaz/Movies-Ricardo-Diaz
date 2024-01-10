
const $containerMovie = document.getElementById('movieData');
const queryParams = new URLSearchParams(location.search);
const id = queryParams.get('id'); 
const movieData = movies.find(movie => movie.id == id); 

const titleMovies = document.getElementById('titleMovies');
titleMovies.textContent = movieData.title;



if (movieData) {
    const genres = movieData.genres.join(', ');
    const voteAverage = parseFloat(movieData.vote_average).toFixed(2); // Redondea a 2 decimales
  const budget = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(movieData.budget);
  const revenue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(movieData.revenue);
  $containerMovie.innerHTML= `
  <div class="w-1/2 dark:text-white text-black flex flex-wrap justify-center items-center">
  <img class="object-contain w-full px-10" src="${movieData.image}" alt="${movieData.title}">
  <table class="my-8 border-collapse border border-slate-500">
      <tbody>
      <tr >
      <td class="border border-slate-700 px-3 ">Original Language</td>
      <td class="border border-slate-700 px-3 font-bold">${movieData.original_language}</td>
      </tr>
      <tr>
      <td class="border border-slate-700 px-3">Relase Date</td>
      <td class="border border-slate-700 px-3 font-bold">${movieData.release_date}</td>
      </tr>
      <tr>
      <td class="border border-slate-700 px-3">Runtime</td>
      <td class="border border-slate-700 px-3 font-bold">${movieData.runtime} min</td>
      </tr>
      <tr>
      <td class="border border-slate-700 px-3">Status</td>
      <td class="border border-slate-700 px-3 font-bold">${movieData.status}</td>
      </tr>
      </tbody>
      </table>
</div>
<div class="w-1/2 dark:text-white text-black">
  <h1 class=" text-4xl font-extrabold mb-1 text-indigo-500 font-bebas-neue">${movieData.title}</h1>
  <h2 class="text-3xl font-medium mb-3">${movieData.tagline}</h2>
  <p class="font-bold mb-6">${genres}</p>
  <p class="border rounded-sm p-5 mb-5 shadow-indigo-500/50 shadow-md">${movieData.overview}</p>
  <table>
      <tbody>
      <tr>
      <td class="border border-slate-700 px-3">Vote Average</td>
      <td class="border border-slate-700 px-3 font-bold">${voteAverage} / 10</td>
      </tr>
      <tr>
      <td class="border border-slate-700 px-3">Budget</td>
      <td class="border border-slate-700 px-3 font-bold">${budget}</td>
      </tr>
      <tr>
      <td class="border border-slate-700 px-3">Revenue</td>
      <td class="border border-slate-700 px-3 font-bold">${revenue}</td>
      </tr>
      </tbody>
      </table>
      <div class="mt-20 w-full flex gap-3 items-center justify-between" >
      <button  class="bg-indigo-500 text-white px-4 py-2 rounded h-1/2 hover:scale-90"> <span><i class="fa-solid fa-heart-circle-plus "></i> Add to Favorites</button>
      <div class="border p-3">
      <p>share on:</p>
      <button  class="bg-blue-500 text-white px-4 py-2 rounded hover:scale-90"> <i class="fa-brands fa-x-twitter"></i> Twitter</button>
      <button  class="bg-blue-900 text-white px-4 py-2 rounded hover:scale-90"> <i class="fa-brands fa-facebook-f"></i> Facebook</button>
      <button class="bg-green-500 text-white px-4 py-2 rounded hover:scale-90"> <i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
      </div>
      
      </div>
</div>
  `;
  
} else {
  $containerMovie.innerHTML = '<p>Movie not found</p>'; // Opcional: un mensaje si la película no se encuentra
}

const movieURL = window.location.href;
const popupWidth = 600;
const popupHeight = 400;
const leftPosition = window.screen.width / 2 - popupWidth / 2;
const topPosition = window.screen.height / 2 - popupHeight / 2;

const popupOptions = `width=${popupWidth},height=${popupHeight},top=${topPosition},left=${leftPosition},resizable=yes,scrollbars=yes,status=yes`;



