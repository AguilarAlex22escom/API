const api = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'

fetch(api)
.then( response => response.json() )
.then( data => {

	let elem = document.getElementById('element')
	elem.innerHTML = `<p>${data.name}</p>`

	console.log(data)
})
.catch( error => console.log(error) )