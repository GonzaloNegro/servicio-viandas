import Data from '../Api/data.json'

export const getProductById = (id) => {return new Promise ((res, rej)=>{
    setTimeout(() => {
        res(Data.find(product => product.id == id))
        rej(console.log('No hay datos'));
    }, 500);
    })
}
