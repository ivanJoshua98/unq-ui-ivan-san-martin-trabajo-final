import { useState } from 'react';
import './App.css';
import ButtonGoHome from './ButtonGoHome';
import Options from './Options';

const Play = () => {

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
      setMovePlayer({})
    }
    
    return (
      <>
        <div className="elections-center">
          <div className="column component-center">
            <h2 className="elections-center margin-top">{namePlayer}</h2> 
            <h2 className="elections-center height margin-top">{resultadoPartida.eleccionPlayer}</h2>
          </div>
          <div className="column component-center">
            <img src="/LogoJuego.png" style={{width: '12rem'}} className="component-center"/>
            <h2 className="component-center">VS</h2>
          </div>
          <div className="column component-center">
            <h2 className="elections-center margin-top">Bot</h2>
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
        <ButtonGoHome/>
      </>
    );
}

export default Play;