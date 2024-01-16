 const url = 'https://moviestack.onrender.com/api/movies'
 const init = { 
    headers:{
        "x-api-key": '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}


export let allMovies = []


await fetch(url, init)
 .then(Response => Response.json())
 .then(data => allMovies=data.movies.map(movie =>{
    const { image, ... rest} = movie;
    return { image: "https://moviestack.onrender.com/static/"+image, ...rest}

}))
.catch(err => console.log(err))


