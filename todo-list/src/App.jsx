import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  let [listado, actualizarListado] = useState([]);


  let [textoInput, actualizarTextoInput] = useState("");

function capturarEventoOnChange(evento) {
  actualizarTextoInput(evento.target.value);
}
function capturarEventoOnClickAgregar(evento) {
let listaNueva= Array.from (listado);
listaNueva.push(textoInput);
actualizarListado(listaNueva);
}

function CapturarEventoOnClicEliminar(Index) {
  let listaNueva= Array.from (listado);
  listaNueva.splice(Index,1);
  actualizarListado(listaNueva);
}

return (
  <>

    <h1> todos </h1>
    <input onChange={capturarEventoOnChange} type="text" />


    <button onClick={capturarEventoOnClickAgregar}>agregar item</button>
    <ul>
      {
        listado.map((item , Index) => {
          return <li key={Index}>{item} <button onClick={() =>CapturarEventoOnClicEliminar(Index)}> Eliminar </button></li>

        })
      }

    </ul>






  </>

)
}
export default App;
