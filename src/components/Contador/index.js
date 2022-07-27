import { useState, useEffect } from 'react';
//hooks

function Contador(){
    /* const handlers = useState(0); */
    const [contador, setContador] = useState(0);

    useEffect(()=>{
        console.log('App mounted!');
      }, [contador]);

    function agregarAlContador(){
        setContador(contador + 1)
        console.log(contador);
    }

    return(
        <div>
            <p>
                {contador}
            </p>
            <br/>
            <button onClick={agregarAlContador}>Agregar al contador 1</button>
        </div>
    );
}

export default Contador;