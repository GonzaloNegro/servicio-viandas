import Data from '../Api/data.json'

export const getProductById = (id) => {
    return new Promise ((res, rej)=>{
    setTimeout(() => {
        res(Data.find(product => product.id == id))
        rej(console.log('No hay datos'));
    }, 500);
    })
}

export const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(Data)
        }, 2000);
    })
}


export const getProductByIdCategory = (categoryId) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(Data.filter(prod => prod.tipo === categoryId))
        }, 2000);
    })
}