import './Container.css';
import ItemListContainer from '../ItemListContainer/';
import ItemCount from '../ItemCount';

function Container(){
    return (
        <div className="contenido">
            <ItemListContainer nombre={'Vianda 1'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} >
                <ItemCount stock={5}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Vianda 2'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} >
                <ItemCount stock={2}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Vianda 3'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} >
                <ItemCount stock={3}  initial={1}/>
            </ItemListContainer>
        </div>
    );
}

export default Container;
/* EXPORTAME POR DEFECTO Container */