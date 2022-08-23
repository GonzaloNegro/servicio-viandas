/* import Data from '../Api/data.json';
import { DB } from '../Api/ApiFirebase';
import { collection, getDocs} from 'firebase/firestore';

export const getProductById = (id) => { */

 
/*     const itemRef= collection(DB,'productos','ID');
    getDocs(itemRef).then(snapshot=>{

      if(snapshot.exists()){

       console.log({id:snapshot.id,...snapshot.data()});
      }
    },error=>{}); */

/*     return new Promise ((res, rej)=>{
    setTimeout(() => {
        res(Data.find(product => product.id == id))
        rej(console.log('No hay datos'));
    }, 500);
    }) */
/* } */

/* export const getProducts = () =>{

    return new Promise((resolve, reject)=>{
        //Creo la referencia a la coleccion que quiero traer
        const colRef = collection(DB, 'productos');

        getDocs(colRef).then((snapshot)=>{
          console.log('>>>>', snapshot.docs);
    
          const productosConFormato = snapshot.docs.map((rawDoc) =>{
            return{
              id: rawDoc.id,
              ...rawDoc.data()
            }
          });
          console.log('>>>PRODUCTO:', productosConFormato);
          resolve(productosConFormato);
    
        }, (error) =>{
          reject('>>>>Error al intentar', error);
        });

    }); */






/* 
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(Data)
        }, 2000);
    }) */
/* } */


/* export const getProductByIdCategory = (categoryId) =>{ */

/*     return new Promise((resolve, reject)=>{
        //Creo la referencia a la coleccion que quiero traer
        const colRef = collection(DB, 'productos');

        getDocs(colRef).then((snapshot)=>{
          console.log('>>>>', snapshot.docs);
    
          const productosConFormato = snapshot.docs.map((rawDoc) =>{
            return{
              id: rawDoc.id,
              ...rawDoc.data()
            }
          });
          console.log('>>>PRODUCTO:', productosConFormato);
          resolve(productosConFormato);
    
        }, (error) =>{
          reject('>>>>Error al intentar', error);
        });

    }); */


/*     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(Data.filter(prod => prod.tipo === categoryId))
        }, 2000);
    })

} */