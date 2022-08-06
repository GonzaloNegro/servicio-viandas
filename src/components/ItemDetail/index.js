import './ItemDetail.css';
import React from 'react';

export default function ItemDetail({title, tipo}){
    return(
        <div className='itemD'>
           {/* <img className='imgD' src="" alt=""></img> */}
            <div className='det'>
                <div>Nombre prod: {title}</div>
                <div>Tipo: {tipo}</div>
                <div>Descripion</div>
                <div>Ingredientes</div>
                <div>valor Energetico</div>
                <div>Ingredientes</div>
                <div>Precio</div>
            </div>
        </div>
    );
}