import { useState } from "react";

const Titulos = ({saludo}) => {
    const [mensaje, setMensaje] = useState('')
    return (
        <div>
            <h1>Hello {saludo} {mensaje}!</h1>
            <button onClick={()=> setMensaje('(from changed state)') }>Click me</button>
        </div>
    );
};

export default Titulos;