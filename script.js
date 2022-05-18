var urlMetricasSitio = "https://www.datos.gov.co/resource/htta-bj9v.json"
var urlMetricasSitio2 = "https://www.datos.gov.co/resource/vbcy-hvi2.json"

var visitas = [];
var fecha = [];
var altitud = [];
var fuente = [];

fetch(urlMetricasSitio)
.then(respuestaMetricasSitio => respuestaMetricasSitio.json())
.then(procesar => {

    console.log("procesar: ", procesar)
    
    procesar.forEach(elemento => {
        
        if (elemento.fecha != undefined && elemento.visitas != undefined){

            visitas.push(elemento.visitas);
            fecha.push(elemento.fecha);

        }

    });

    var grafMetricasSitio = [{

        x: fecha,
        y: visitas,
        marker: {
            color: "orange"
        },
        type: "scatter"

    }];

    var layoutMetricasSitio = {
        title: 'Usuarios por fecha',
        height: 400,
        width: 1000, 
        xaxis: {
            title: "Fecha",
        },

        yaxis: {
            title: "Usuarios"
        }
    };

    Plotly.newPlot("indiceInfoClas", grafMetricasSitio, layoutMetricasSitio);

});

fetch(urlMetricasSitio2)
.then(respuestaMetricasSitio2 => respuestaMetricasSitio2.json())
.then(function transformar (respuestaMetricasSitio2) {

    console.log(respuestaMetricasSitio2);

    respuestaMetricasSitio2.forEach(function agregar (respuestaMetricasSitio2) 
    {
        //Si los datos son diferentes de vacío
        if (respuestaMetricasSitio2.municipio != undefined && respuestaMetricasSitio2.tiempo_de_sesion != undefined) 
        {
            altitud.push(respuestaMetricasSitio2.municipio);
            fuente.push(respuestaMetricasSitio2.tiempo_de_sesion);
        }
    });

var trace1 = {
    y: fuente,
    mode: 'markers',
    marker: {
      size: 10,
      //color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,44,45]
      color: 'rgba(219, 64, 82, 0.6)',
      
    }
  };
  
  var data = [trace1];
  
  var layout = {
    xaxis:{
        title: 'Cantidad de muestras tomadas',
    },
    yaxis:{
        title: 'Tráfico en las zonas Wi-fi'
    },
    title: 'Información del tráfico en zonas Wi-Fi en el Valle del Cauca'
    
  };
  
  Plotly.newPlot('myDiv', data, layout);
  
  
});

//API que aporta los datos de la gráfica pokémon
var urlPokeApi = "https://pokeapi.co/api/v2/pokemon/arcanine";
var habilidades = [];
var puntajes = [];



fetch(urlPokeApi)

.then(habilidades_poke => habilidades_poke.json())
.then(function transformar(habilidades_poke){

    habilidades_poke.stats.forEach(function agregar (habilidades_poke){
        puntajes.push(habilidades_poke["base_stat"]);
        habilidades.push(habilidades_poke["stat"]["name"]);
    });

    puntajes.forEach(function(puntaje) {
        parseInt(puntaje);
    });

    //Variables para las gráficas
    var data =[{
        type: 'scatterpolar',
        r: puntajes,
        theta: habilidades,
        fill: 'toself',
        name: 'Habilidades de Arcanine'
    }];

    var layout = {
        polar: {
            radialaxis: {
              visible: false,
              range: [0, 120]
            }
          },
          showlegend: false
    };
      
    Plotly.newPlot('habilidadesPokemon', data, layout);
});





