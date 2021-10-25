//!Llamado de API de rick and morty para practicar callbacks en las funciones
let XML = require('xmlhttprequest').XMLHttpRequest

let API = 'https://rickandmortyapi.com/api/character/';//API publica a consultar

function fecthData(url_api, callback){
    let xhttp = new XML();
//*propiedad para saber que accion a tomar cuando se mande a llamar el http
    xhttp.open('GET', url_api, true);
//*Si existe un cambio en el estado de ese metodo se manda a llamar una funcion que recibira un evento
    xhttp.onreadystatechange = function (event){
//*Checa primero si se hizo el llamado HTTP
        if(xhttp.readyState === 4){
//*Checa si la respuesta obtuvo datos
           if(xhttp.status === 200){
               callback(null,JSON.parse(xhttp.responseText));
           } else{
               const error = new Error('Error ' + url_api);
               return callback (error, null) //Por estandar se manda cuando hay un error en el callback primero el error
           }
        }
    }
    xhttp.send();
}

fecthData(API, function (err1, dato1){
    if(err1) return console.error(err1);
    fecthData(API + dato1.results[0].id, function (err2, dato2){
        if(err2) return console.error(err2);
        fecthData(dato2.origin.url, function (err3, dato3){
            if(err3) return console.error(err3);
            console.log(dato1.info.count);
            console.log(dato2.name);
            console.log(dato3.dimension);
        });
    })
})

