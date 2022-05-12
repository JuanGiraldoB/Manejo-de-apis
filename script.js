var urlMetricasSitio = "https://www.datos.gov.co/resource/htta-bj9v.json"

var visitas = [];
var fecha = [];

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