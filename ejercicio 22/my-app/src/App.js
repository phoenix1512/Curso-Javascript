import React from 'react';
import Descripcion from './component/Descripcion'
import Saludo from './component/Saludo';
import Evento from './component/Evento';
import Contador from './component/Contador';
import Room from './component/Room'

function App() {
    return (
        <div>
            <h1 className="text-center">Ejercicio 22</h1>
            <table>
                <tbody>
                    <tr>
                        <td><Room name="Sala" /></td>
                        <td><Room name="Comedor" /></td>
                        <td><Room name="Cocina" /></td>
                    </tr>
                    <tr>
                        <td><Room name="Estancia" /></td>
                        <td><Room name="Recamara niños" /></td>
                        <td><Room name="Recamara principal" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
