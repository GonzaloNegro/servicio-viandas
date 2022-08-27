import './Footer.css';
import Logo from './icono.png';

function Footer(){
    return(
        <div className='fot'>
            <div className="tittle">
                <h1><img src={Logo} alt="" width="80px"/>Tu vianda</h1>
            </div>
            <div className="location">
                <h2>Córdoba, Argentina</h2>
            </div>
            <div className="copy">
                <p>© 2022 Desarrollado por Gonzalo Negro</p>
            </div>
        </div>
    );
}

export default Footer;