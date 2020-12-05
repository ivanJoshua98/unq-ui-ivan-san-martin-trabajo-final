import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Options from './Options';

const Play = () => {

    const history = useHistory();

    const namePlayer = localStorage.getItem("namePlayer");    

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
          resultado: "Gano ".concat(namePlayer),
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id
        })
      }
      if(movePlayer.debilidades.includes(moveBot.id)){
        setResultadoPartida({
          resultado: "Gano BOT",
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id
        })
      }
      if(movePlayer.neutral === moveBot.id){
        setResultadoPartida({
          resultado: "Empate",
          eleccionPlayer: movePlayer.id,
          eleccionBot: moveBot.id})
      }
    }
    
    return (
      <div>
        <div className="component-center">
          <h1>Se inicia una nueva partida con {namePlayer}</h1>
        </div>
        <Options setMovePlayer={setMovePlayer} setMoveBot={setMoveBot} setResult={setResultadoPartida}/>
        <div className="elections-center">
          <div className="margin-top">
            <h2>{namePlayer} eligio:</h2> 
            <h2>{resultadoPartida.eleccionPlayer}</h2>
          </div>
          <div className="margin-top">
            <h2>Bot eligio: </h2>
            <h2>{resultadoPartida.eleccionBot}</h2>
          </div>
        </div>
        <div className="component-center">
          <button onClick={setResult} className="btn btn-outline-danger margin-top"> Ver resultado </button>
          <h1>{resultadoPartida.resultado}</h1>
        </div>
        <div className="component-center">
          <button onClick={goHome} className="btn btn-outline-danger">
              Volver a inicio
          </button>
        </div>
      </div>
    );
}

export default Play;