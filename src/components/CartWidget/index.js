import './CartWidget.css';
import { BsCart2 } from "react-icons/bs"; 
import { Link } from 'react-router-dom';

function CartWidjget(){


    return( 
        <>
            <Link to='/cart' className='cart'>
                <div className='cartp'><BsCart2/></div>
                <p id="valorCart" className='cartcant'>0</p>
            </Link>
        </>
    );
}

export default CartWidjget;