import './Container.css';
import ItemListContainer from '../ItemListContainer/';

function Container(){
    return (
        <div className="contenido">
            <div className='viandas'>
                <h1>NUESTRAS VIANDAS PRÁCTICAS Y SALUDABLES</h1>
            </div>
                <ItemListContainer/>
        </div>
    );
}

export default Container;
/* EXPORTAME POR DEFECTO Container */