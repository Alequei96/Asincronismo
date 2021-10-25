const fecthData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';//API publica a consultar

//! Manera de hacer una funcion con estructura de promesa y mandarla a llamar con async  
const asyncfunction = async (url_api) => {
    try {
const data = await fecthData(url_api);
const character = await fecthData(`${API}${data.results[0].id}`);
const origin = await fecthData(character.origin.url);
console.log(data.info.count);
console.log(character.name);
console.log(origin.dimension);
    } catch (error) {
        console.erro(error);
    }
}
console.log('Antes');
asyncfunction(API);
console.log('Despues');