import React from 'react'
import { useUserContext,useUserToglleContext } from '../provider/userProvider'
import '../estilos/hijo_style.css'
const Hijo = () => {
    const usuario = useUserContext()
    const cambiaLogin = useUserToglleContext()
    return (
    <div className="hijo">
        
        <h2>Componente Hijo</h2>
        {usuario && <p>Hola {usuario.nombre}</p> }
        <button onClick={cambiaLogin} >Cambiar Usuario</button>
        <input type='text' onChange={cambiaLogin}/>
    </div>
  )
}

export default Hijo