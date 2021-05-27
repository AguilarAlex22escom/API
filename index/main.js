/* Consumiendo API */

const api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
const apiKey = 'uBKGhEjhRL4iicVQzfWlUXc4hnp7A7g3yeFTeC6f'
fetch(api)
.then( response => response.json() )
.then( data => {

	let elem = document.getElementById('element')
	elem.innerHTML = `	<figure><img src=${data.url}>
							<div id="photo">
								<h2>${data.title}</h2>
								<h4>Autor: ${data.copyright}</h4>
								<p>Información de la imágen: ${data.explanation}</p>
							</div>
						</figure>` 
	console.log(data)
})
.catch( error => console.log(error) )
