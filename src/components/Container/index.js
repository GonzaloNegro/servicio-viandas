import './Container.css';
import ItemListContainer from '../ItemListContainer/';
import ItemCount from '../ItemCount';
import img1 from '../Imagenes/Bife-a-la-criolla-con-verduras.jpg';
import img2 from '../Imagenes/Bondiola-con-pure-de-zapallo.jpg';
import img3 from '../Imagenes/Fideos-con-brocoli-y-salsa-blanca.jpg';
import img4 from '../Imagenes/Filet-de-merluza-con-pure-de-calabaza.jpg';

import img5 from '../Imagenes/Bowl-de-garbanzos-con-vegetales.jpg';
import img6 from '../Imagenes/Canelones-de-acelga-y-ricota-con-salsa-de-tomate.jpg';
import img7 from '../Imagenes/Canelones-de-verdura-con-salsa-blanca.jpg';
import img8 from '../Imagenes/Guiso-de-lentejas-veggie.jpg';

function Container(){
    return (
        <div className="contenido">
            <div className='viandas'>
                <h1>NUESTRAS VIANDAS PRÁCTICAS Y SALUDABLES</h1>
            </div>
            <ItemListContainer nombre={'Bife a la criolla con verduras'} descripcion={''} img={img1}>
                <ItemCount stock={5}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Bondiola con pure de zapallo'} descripcion={''} img={img2}>
                <ItemCount stock={2}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Fideos con brocoli y salsa blanca'} descripcion={''} img={img3}>
                <ItemCount stock={3}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Filet de merluza c/pure de calabaza'} descripcion={''} img={img4}>
                <ItemCount stock={6}  initial={1}/>
            </ItemListContainer>

            <ItemListContainer nombre={'Bowl de garbanzos con vegetales'} descripcion={''} img={img5}>
                <ItemCount stock={2}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Canelones de acelga y ricota c/salsa de tomate'} descripcion={''} img={img6}>
                <ItemCount stock={4}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Canelones de verdura c/salsa blanca'} descripcion={''} img={img7}>
                <ItemCount stock={5}  initial={1}/>
            </ItemListContainer>
            <ItemListContainer nombre={'Guiso de lentejas veggie'} descripcion={''} img={img8}>
                <ItemCount stock={7}  initial={1}/>
            </ItemListContainer>
        </div>
    );
}

export default Container;
/* EXPORTAME POR DEFECTO Container */