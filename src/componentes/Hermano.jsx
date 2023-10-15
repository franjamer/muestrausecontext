import React from 'react'
import { useUserContext,useUserToglleContext } from '../provider/userProvider'
import '../estilos/hermano_style.css'
const Hermano = () => {
   const usuario= useUserContext()
    const cambiaLogin = useUserToglleContext()
  return (
    <div className='hermano'>
        <h2>
            Componente Hermano
        </h2>           
        {usuario && <p>Hola {usuario.nombre}</p> }
       
        <button onClick={cambiaLogin} >Cambiar Usuario desde Hermano</button>
        <input type='text' onChange={cambiaLogin}/>
    </div>
  )
}

export default Hermano