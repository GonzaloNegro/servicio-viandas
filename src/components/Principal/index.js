import './principal.css';
import Logo from './icono.png';
import Container from '../Container';


function Principal(){
    return(
        <>
            <div className='prin'>
                <div className='tit'>
                    <h1><img src={Logo} alt="" width="200px"/>Tu vianda</h1>
                </div>
            </div>
           <Container/>
        </>
    );
}

export default Principal;