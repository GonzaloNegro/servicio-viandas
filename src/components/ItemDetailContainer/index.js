import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
/* import { getProductById } from '../export'; */
import { getFirestore, doc, getDoc } from "firebase/firestore";


function ItemDetailContainer(){


    const [loading, setLoading] = useState(true);
    const [error ,setError] = useState(false);
    const [resultado, setResultado] = useState();
    const {id} = useParams();
    
    useEffect(() => {
      const queryDatabase = getFirestore ()
      const queryDoc = doc(queryDatabase, 'productos', id)
      getDoc(queryDoc)
      .then(res => setResultado({id:res.id, ...res.data()}))
      .catch(()=>{
        setError(true)
      })
      .finally(()=> {
        setLoading(false)
      })
    }, [id])

/*     const[loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const {id} = useParams();

   useEffect(() => {
        getProductById(id)
        .then(product =>{
            setProduct(product)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id]) */

    return(
        <div className='detcont'>
            {
           loading ? <h4 className='charge'>Cargando productos...</h4> :  <ItemDetail {...resultado}/>
            }
        </div>
    );
}

export default ItemDetailContainer;