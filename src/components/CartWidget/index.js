import './CartWidget.css';
import { BsCart2 } from "react-icons/bs"; 

function CartWidjget(){
    return( 
        <a className="cart" href="#link">
            <div className='cartp'><BsCart2/></div>
            <p id="valorCart" className='cartcant'>0</p>
        </a>
    );
}

export default CartWidjget;