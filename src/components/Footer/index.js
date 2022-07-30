import './Footer.css';
import Logo from '../Imagenes/icono.png';

function Footer(){
    return(
        <div className='fot'>
            <div class="tittle">
                <h1><img src={Logo} alt="" width="50px"/>Tu vianda</h1>
            </div>
            <div class="location">
                <h2>Córdoba, Argentina</h2>
            </div>
            <div class="copy">
                <p>© 2022 Desarrollado por Gonzalo Negro</p>
            </div>
        </div>
    );
}

export default Footer;