const getEstrenos = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=89df84660fd894ea35a8a575fc64f376&language=es-ES&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      const ordenar = (a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (b.popularity < b.popularity) {
          return 1;
        }
        return 0;
      };

      const cardEstrenos = document.getElementById("cardE");
      const infoData = data.results.sort(ordenar).map(
        (info) =>
          `<div class="cards">
                <img class= "card-img" src="https://image.tmdb.org/t/p/w500${info.poster_path}" 
            </div>`
      );

      cardEstrenos.innerHTML = infoData;

    });
};
getEstrenos();

const getSeries = () => {
  fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=89df84660fd894ea35a8a575fc64f376&language=es-ES&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      const ordenar = (a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (b.popularity < b.popularity) {
          return 1;
        }
        return 0;
      };

      const cardS = document.getElementById("cardS");
      const infoData = data.results.sort(ordenar).map(
        (info) =>
          `<div class="cards">
                <img class= "card-img" src="https://image.tmdb.org/t/p/w500${info.poster_path}" 
            </div>`
      );

      cardS.innerHTML = infoData;

    });
};
getSeries();



const getSerch = (texto_buscar) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=89df84660fd894ea35a8a575fc64f376&language=es-ES&query=${texto_buscar}&page=1&include_adult=false`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const ordenar = (a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (b.popularity < b.popularity) {
          return 1;
        }
        return 0;
      };

      const cardS = document.getElementById("cardB");
      const infoData = data.results.sort(ordenar).map(
        (info) =>
          `<div class="cards">
                <img class= "card-img" src="https://image.tmdb.org/t/p/w500${info.poster_path}" 
            </div>`
      );

      cardS.innerHTML = infoData;

    });
  
    
  }

  const search = () => { 
    console.log('search');
      const searchField = document.getElementById('campo-search')

      if (searchField.value === "") {
        return alert('Escriba un nombre de peli')
      }
      console.log(searchField.value);
      getSerch (searchField.value)
  }   