import './CartWidget.css';
import { BsCart2 } from "react-icons/bs"; 
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext'

function CartWidget(){
    const { totalProductos } = useCartContext();

    return( 
        <>
            <Link to='/cart' className='cart'>
                <div className='cartp'><BsCart2/></div>
                <span className='cartcant'>{ totalProductos() || " "}</span> 
            </Link>
        </>
    );
}

export default CartWidget;
