


const _movie_name =prompt("enter movie name")

const getMovie = ((movie_name) => {

fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=${movie_name}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "9c6b6933demsh94811aa8fcd294ep18beaejsnadbe0f88356d"
	}
})
.then(response => response.json())
.then(data => {
	const list = data.movie_results;
	return list[0].imdb_id;
})
.then((id) => {
	return fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "9c6b6933demsh94811aa8fcd294ep18beaejsnadbe0f88356d"
	}
	}
)
})
.then(response => response.json())
.then(data =>{ 
	const title = data.title;
	const rating =  data.imdb_rating;
	const movie = `<h1>Title: ${title} <br/> Rating:${rating}</h1>`;
	document.querySelector('.movies').innerHTML = movie;
})
.catch(err => {
	console.error(err);
});
});



getMovie(_movie_name);
