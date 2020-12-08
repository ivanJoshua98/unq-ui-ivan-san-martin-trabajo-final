import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Options from './Options';

const Play = () => {

    const history = useHistory();

    const namePlayer = localStorage.getItem("namePlayer");    

    const [points, setPoints] = useState({
      jugadorUno: 0,
      jugadorDos: 0
    })

    const [movePlayer, setMovePlayer] = useState({});

    const [moveBot, setMoveBot] = useState({});

    const [resultadoPartida, setResultadoPartida] = useState({
      resultado: "",
      eleccionUno: "",
      eleccionDos: ""
    });
     
    const goHome = () => {
        history.push("/home")
    };

    const setResult = () => {
      console.log("Jugada player", movePlayer)
      if (movePlayer.fortalezas.includes(moveBot.id)){
        setResultadoPartida({
          resultado: "GANO ".concat(namePlayer),
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id
        })
        setPoints({
          jugadorUno: points.jugadorUno + 1,
          jugadorDos: points.jugadorDos
        })
        console.log("Puntos jugadorUno:", points.jugadorUno,"Puntos jugadorDos: ", points.jugadorDos)
      }
      if(movePlayer.debilidades.includes(moveBot.id)){
        setResultadoPartida({
          resultado: "GANO BOT",
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id
        })
        setPoints({
          jugadorUno: points.jugadorUno,
          jugadorDos: points.jugadorDos + 1
        })
        console.log("Puntos jugadorUno:", points.jugadorUno,"Puntos jugadorDos: ", points.jugadorDos)
      }
      if(movePlayer.neutral === moveBot.id){
        setResultadoPartida({
          resultado: "EMPATE",
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id})
      }
    }
    
    return (
      <div>
        <div className="elections-center">
          <div className="column component-center">
            <h2 className="elections-center">{namePlayer}</h2> 
            <h2 className="elections-center height margin-top">{resultadoPartida.eleccionPlayer}</h2>
          </div>
          <div className="column">
            <h2 className="component-center">VS</h2>
          </div>
          <div className="column component-center">
            <h2 className="elections-center">Bot</h2>
            <h2 className="elections-center height margin-top">{resultadoPartida.eleccionBot}</h2>
          </div>
        </div>
        <Options setMovePlayer={setMovePlayer} setMoveBot={setMoveBot} setResult={setResultadoPartida}/>
        <div className="elections-center">
          <div className="column component-center">
            <h1>{points.jugadorUno}</h1>
          </div>
          <div className="column component-center">
            <div className="component-center">
              <button onClick={setResult} disabled={!movePlayer.id} className="btn btn-outline-danger button-size">
                Ver resultado
              </button>
            </div>  
            <h1 className="margin height">{resultadoPartida.resultado}</h1>
          </div>
          <div className="column component-center">
              <h1>{points.jugadorDos}</h1>
          </div>
        </div>
        <div className="component-center">
          <button onClick={goHome} className="btn btn-outline-danger button-size">
              Volver a inicio
          </button>
        </div>
      </div>
    );
}

export default Play;