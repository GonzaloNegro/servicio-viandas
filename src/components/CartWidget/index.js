import './CartWidget.css';
import { BsCart2 } from "react-icons/bs"; 

function CartWidjget(){
    return( 
        <div className="cart">
            <a className='cartp' href="#link"><BsCart2/>0</a>
        </div>
/*     <Nav.Link href="#link"><BsCart2/></Nav.Link> */
    );
}

export default CartWidjget;