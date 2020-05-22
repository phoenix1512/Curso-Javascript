import React, {useState} from 'react'

const Contador = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Tu edad es {count} años</p>
            <p>Eres {count < 18 ? 'Menor de edad' : 'Mayor de edad'}</p>
            <button onClick={() => setCount(count+1)}>Aumentar edad</button>
        </div>
    )
}

export default Contador
