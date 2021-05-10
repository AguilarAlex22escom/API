const api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
const apiKey = 'uBKGhEjhRL4iicVQzfWlUXc4hnp7A7g3yeFTeC6f'
fetch(api)
.then( response => response.json() )
.then( data => {

	let elem = document.getElementById('element')
	elem.innerHTML = `<figure>${data.hdurl}` 
	console.log(data)
})
.catch( error => console.log(error) )