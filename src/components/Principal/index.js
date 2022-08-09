import './principal.css';
import Logo from './icono.png';
import ItemListContainer from '../ItemListContainer';


function Principal(){
    return(
        <>
            <div className='prin'>
                <div className='tit'>
                    <h1><img src={Logo} alt="" width="200px"/>Tu vianda</h1>
                </div>
            </div>
           <ItemListContainer/>
        </>
    );
}

export default Principal;