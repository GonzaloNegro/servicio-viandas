import React from "react";
import './Form.css'

const Form = () => {
    return(
        <div className="datos">
            <form>
                <input type="email" placeholder="Correo" required></input>
                <input type="email" placeholder="Repetir correo" required></input>
                <input type="text" placeholder="Nombre" required></input>
                <input type="number" placeholder="Teléfono de contacto" required></input>
            </form>
        </div>
    );
}

export default Form;