//!Llamado de API de rick and morty para practicar callbacks en las funciones
let XML = require('xmlhttprequest').XMLHttpRequest

const fecthData = (url_api) =>{
    return new Promise ((resolve, reject)=>{
        const xhttp = new XML();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve (JSON.parse(xhttp.responseText))
                : reject (new Error('Error ', url_api))
            }
        })
        xhttp.send();
    });
}

module.exports = fecthData;