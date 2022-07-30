import './principal.css';
import Logo from '../Imagenes/icono.png';

function Principal(){
    return(
    <div className='prin'>
        <div className='tit'>
            <h1><img src={Logo} alt="" width="200px"/>Tu vianda</h1>
        </div>
    </div>
    );
}

export default Principal;