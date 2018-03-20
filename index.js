// Importare modulo AXIOS, per API più semplici
var axios = require('axios');
var wget = require('node-wget');

// Valorizziamo il dominio
var urlDomain = 'https://api.unsplash.com/';

// Valorizziamo il parametro che vogliamo richiedere
var request = 'photos/random/';

// API KEY
var apiKey = '0971aac51358c18e529215b91b61bc2fe343cc45291ec485d426790a02cb5fc5';

// Vogliamo 5 risposte
var count = 5;

// Costruiamo l'url di richiesta
var requestUrl = urlDomain + request;

// Richiesta con AXIOS
axios.get(requestUrl, {
    params: { 
        api_key : apiKey,
        count : count

    }
})

.then(function (response) {
    for(var i = 0; i < count; i++) {
        wget( 
                {
                    url : response.data[i].urls,
                    dest: './img' + '.jpg'
                },
                function (error) {
                    if (error) 
                    console.log('error');
                }
            );
        }
    }
)

.catch(function (error) {

	console.log(error);
});