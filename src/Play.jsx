import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Options from './Options';

const Play = () => {

    const history = useHistory();

    const namePlayer = localStorage.getItem("namePlayer");    

    const [movePlayer, setMovePlayer] = useState({});

    const [moveBot, setMoveBot] = useState({});

    const [resultadoPartida, setResultadoPartida] = useState("");
     
    const goHome = () => {
        history.push("/home")
    };

    const setResult = () => {
      console.log("Jugada player", movePlayer)
      if (movePlayer.fortalezas.includes(moveBot.id)){
        setResultadoPartida("Gano ".concat(namePlayer))
      }
      if(movePlayer.debilidades.includes(moveBot.id)){
        setResultadoPartida("Gano BOT")
      }
      if(movePlayer.neutral === moveBot.id){
        setResultadoPartida("Empate")
      }
    }
    
    return (
      <>
        <h1>Se inicia una nueva partida con {namePlayer}</h1>
        <Options setMovePlayer={setMovePlayer} setMoveBot={setMoveBot} setResult={setResultadoPartida}/>
        <div>
          <h2>Jugador {namePlayer} eligio {movePlayer.id}</h2>
          <h2>Bot eligio {moveBot.id}</h2>
        </div>
        <div>
          <button onClick={setResult}> Ver resultado </button>
          <h2>{resultadoPartida}</h2>
        </div>
        <button onClick={goHome}>
            Volver a inicio
        </button>
      </>
    );
}

export default Play;