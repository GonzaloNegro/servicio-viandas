import './Container.css';
import ItemListContainer from '../ItemListContainer/';

function Container(){
    return (
        <div className="contenido">
            <ItemListContainer nombre={'Vianda 1'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} />
            <ItemListContainer nombre={'Vianda 2'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} />
            <ItemListContainer nombre={'Vianda 3'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} />
        </div>
    );
}

export default Container;
/* EXPORTAME POR DEFECTO Container */