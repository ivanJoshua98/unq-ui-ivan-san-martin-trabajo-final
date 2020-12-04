import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Options from './Options';

const Play = () => {

    const history = useHistory();

    const namePlayer = localStorage.getItem("namePlayer");    

    const [movePlayer, setMovePlayer] = useState({});

    const [moveBot, setMoveBot] = useState({});
     
    const goHome = () => {
        history.push("/home")
    };
    
    return (
      <>
        <h1>Se inicia una nueva partida con {namePlayer}</h1>
        <Options setMovePlayer={setMovePlayer} setMoveBot={setMoveBot}/>
        <h2>Jugador {namePlayer} eligio {movePlayer.id}</h2>
        <h2>Bot eligio {moveBot.id}</h2>
        <button onClick={goHome}>
            Volver a inicio
        </button>
      </>
    );
}

export default Play;