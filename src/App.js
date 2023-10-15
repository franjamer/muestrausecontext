import React from 'react';
import '../src/estilos/App.css'
import { UserProvider } from './provider/userProvider';
import Hijo from './componentes/Hijo'
import Hermano from './componentes/Hermano';
// import { useState } from 'react';
import Tablero from './App2';
//Creamos el hook con dreateContext
//Lo exportamos para utilizarlo desde cualquier lado.


function App() {
  /*
  utilizamos userContext como si fuera un componente.
  llamamos a la funcion específica provider, a la cual 
  le asignamos un valor que puede ser cualquier cosa(funcion, objeto,...),
  nosotros le pasamos el usuario.
    Lo que logramos es que cualquier componente que esté dentro de la
  jerarquia que hemos creado(userProvider),pueda acceder a la
  variable usuario, "de hijos a padre"

   */
  return (
    <UserProvider  >

      <div className='App' >
        <Tablero />
        <hr />
        <Hijo />
        <Hermano />
      </div>
    </UserProvider>

  );
}

export default App;
