import './Caja.css'

function Caja(props){
    return( 
    <div className="caja">
        {props.saludo}
        {props.children}
    </div>
    );
}

export default Caja;