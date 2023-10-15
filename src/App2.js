import { useState } from "react"


function Cuadrado({ valor, onCuadradoClick }) {
    //Almacenamos el valor actual del componente en el estado
    //y lo cambiamos al hacer click en cada cuadrado.
    //Eliminamos el propio seguimiento con estado de valor del componente
    // const [valor, setValor] = useState(null)
    //y la funcion onClick

    // function onCuadradoClick(){

    // }

    return (
        <button
            className="cuadrado"
            onClick={onCuadradoClick}
        >{valor}</button>
    );
}


    //Función principal de inicio de la aplicación 3 en raya.

    export default function Tablero() {
        //Establecemos que el primer movimiento sea "X" de forma predeterminada
        const [xEsSiguiente, setXEsSiguiente] = useState(true)
        //Creamos un hook estado, con una matriz de nueve elementos cuyo valor por defecto de cada uno de ellos es ·null·
        const [cuadrados, setCuadrados] = useState(Array(9).fill(null))
        //creamos la funcion que manejará el evento click
        function handleClick(i) {
            if (cuadrados[i] || calculaGanador(cuadrados)) {
                return;
            }
            const siguienteCuadrado = cuadrados.slice()
            if (xEsSiguiente) {
                siguienteCuadrado[i] = "X"
            } else {
                siguienteCuadrado[i] = "O"
            }
            setCuadrados(siguienteCuadrado)
            setXEsSiguiente(!xEsSiguiente)
        }

        //Funcion para declarar un ganador.

function calculaGanador(cuadrados) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
            return cuadrados[a]
        }
    }
    return null;
}
//Mostramos un texto para indicar el ganador, si el guego termina, si esta en curso y 
//el turno del siguiente jugador
const ganador = calculaGanador(cuadrados)
let estado;
if (ganador) {
    estado = 'Ganador: ' + ganador
} else{
    estado = "Siguiente Jugador " +(xEsSiguiente ? "X" : "O")
}

        return (
            <>
                <div className="estado">{estado}</div>
                <div className="Tablero-Fila">
                    <Cuadrado valor={cuadrados[0]} onCuadradoClick={() => handleClick(0)} />
                    <Cuadrado valor={cuadrados[1]} onCuadradoClick={() => handleClick(1)} />
                    <Cuadrado valor={cuadrados[2]} onCuadradoClick={() => handleClick(2)} />
                </div>
                <div className="Tablero-Fila">
                    <Cuadrado valor={cuadrados[3]} onCuadradoClick={() => handleClick(3)} />
                    <Cuadrado valor={cuadrados[4]} onCuadradoClick={() => handleClick(4)} />
                    <Cuadrado valor={cuadrados[5]} onCuadradoClick={() => handleClick(5)} />
                </div>
                <div className="Tablero-Fila">
                    <Cuadrado valor={cuadrados[6]} onCuadradoClick={() => handleClick(6)} />
                    <Cuadrado valor={cuadrados[7]} onCuadradoClick={() => handleClick(7)} />
                    <Cuadrado valor={cuadrados[8]} onCuadradoClick={() => handleClick(8)} />
                </div>
            </>
        )
    }
