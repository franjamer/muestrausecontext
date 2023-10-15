import React from "react"
import { useState, useContext } from "react"

//esto son los hooks personalizados
const userContext =React.createContext()
const userToggleContext =React.createContext()
//aqui creamos una funcion para cada hook personalizado para exportarlo,
// y mantener el encapsulado.
export function useUserContext()
{
    return useContext(userContext)
}

export function useUserToglleContext() {
    return  useContext(userToggleContext)
}
//función principal que da nombre al componente.
export function UserProvider({children}){
    const [usuario, setUsuario]= useState(null)
  //función para cambiar login, si usuario existe, lo pondremos a nulo.
  const cambiaLogin = () => {
    if (usuario) {
      //si existe el usuario le ponemos a null
      setUsuario(null)
    }else
    {
      //si no existe el usuario, le asignamos los datos que
      //necesitemos.
      //esto al final es un pequeño metodo, 
      //que activaré poniendo un botón en el jsx
      setUsuario({
        nombre:'Luis',
        email:'luis@mail.com'
      })
    }
  }
  /*Este nuevo contexto tiene dentro otro contexto llamado userTobbleContext */
    return (
        <userContext.Provider  value={usuario}>
            <userToggleContext.Provider value={cambiaLogin} >
            {children}
            </userToggleContext.Provider>            
        </userContext.Provider>
    )
} 

//con este hook podemes guardar un usuario, y una funcion que permita modificar dicho usuario.
  //almacenamos de inicio un valor null
//   const [usuario, setUsuario] = useState(null)
  /*
  utilizamos userContext como si fuera un componente.
  llamamos a la funcion especifica provider, a la cual 
  le asignamos un valor que puede ser cualquier cosa(funcion, objeto,...),
  nosotros le pasamos el usuario.
    Lo que logramos es que cualquier componente que esté dentro de la
  jerarquia que hemos creado(userContext.Provider),pueda acceder a la
  variable usuario, "de hijos a padre"

   */  