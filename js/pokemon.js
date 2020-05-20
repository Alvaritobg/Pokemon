const s_btn = document.getElementById('verPokemonBtn');
const $imgPokemon = document.querySelector('#imgPokemon');
const $imgPokemon2 = document.querySelector('#imgPokemon2');
const $nombrePokemon = document.querySelector('#nombrePokemon');
const $tipoPokemon = document.querySelector('#masDatos');
const url = "https://pokeapi.co/api/v2/pokemon/";
const $tarjetas = document.getElementById('contenedor_tarjetas');
const $tarjeta = document.getElementById('pokemon_contenedor');
const $iconosURL = "/iconos/";

// muestra mensajes en pantalla
function mostrarMensaje(mensaje) {
    alert(mensaje) // mejorar (poner más bonito) 
}

// V2
function renderizarPokemon(pokemon) {
   
    const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // primera letra en mayuscula
    let tipos = []
        for (i = 0; i < pokemon.types.length; i++) {
            let t = tipos.push(pokemon.types[i].type.name)
            //console.log(tipos)
        }
 
    $tarjetas.innerHTML += `
    <div class="col-12 col-md-6 mx-auto mt-3  ${pokemon.types[0].type.name}" id="pokemon_contenedor">
					<div class="row">
						<div class="col-12 col-md-12">
							<div class="fondoImg">
							<img alt"${nombre}" src="https://pokeres.bastionbot.org/images/pokemon/${r}.png" id="imgPokemon">
							</div>
						</div>
						
						<div class="col-12 col-md-12 pokemon_cont_info">
                        <h4 id="nombrePokemon"><strong>#${idPokemon}</strong> ${nombre}</h4>
                        
                            <div id="masDatos">
                            <!-- <div class="tipos">
                                    ${tipos.map(tipo =>`<span class="${tipo}">${tipo}</span>`).join('  ')}
                            </div> -->

                            
                            ${tipos.map(tipo =>`<div class="icon ${tipo}"><img src="/iconos/${tipo}.svg" alt="${tipo}"></div>`).join(' ')}
                                
						</div>
					</div>
				</div>
    `
     
}



    s_btn.addEventListener('click', () => {     //inicia al hacer click
        r=Math.floor((Math.random() * 151 )+ 1) //elige del 1 al 150 
        idPokemon = r
        fetchPokemon()
        // sustituido por funcion asincrona (fetchPokemon)
        // fetch(url + r)
        // .then(respuesta => respuesta.json())
        // .then(pokemon => {            
        //      renderizarPokemon(pokemon)
        //  })
        
    });

    async function fetchPokemon() {
        const response = await fetch(url + r)
        if (response.ok) { //si la promesa funciona
            let pokemon = await response.json()
            renderizarPokemon(pokemon)
        } else { //si la promesa falla
            mostrarMensaje('Pokemon no encontrado')
        }
    
    }

    