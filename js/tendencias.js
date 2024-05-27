/* ejemplo para crear las tarjetas
<div class="contenedor-peliculas">
                   <div class="box"><a href=""><img src="./src/img/peliculas/peli_5.jpg" alt="Acuaman"></a></div>

*/

function crearTarjeta(pelicula){
    
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('box');
    const enlace = document.createElement('a');
    enlace.classList.add('enlace');
    const imagen = document.createElement('img');
    imagen.classList.add('imagen');
    imagen.src = `${pelicula.backdrop_path}`; 
    imagen.alt = pelicula.title ;
       
    enlace.appendChild(imagen);
    tarjeta.appendChild(enlace);

    return tarjeta;

};

const url = 'https://movies-api14.p.rapidapi.com/shows';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89889c8be4mshfc2cc411bcb87f5p1c2341jsn403abe304295',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};

const cargarPeliculas = async () =>{
    try {
        const response = await fetch(url, options); 
        const result = await response.json();
        const movie = result.movies; 
       
        const contenedor = document.getElementById('peliculas-contenedor')
        contenedor.innerHTML = '';
       
        movie.forEach(movies => { 
            const peliculaCard = crearTarjeta(movies); 
            contenedor.appendChild(peliculaCard) 
        });     
        
    } catch (error) {
        
    }
};
cargarPeliculas ();