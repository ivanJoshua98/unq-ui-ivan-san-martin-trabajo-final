import { useState } from 'react';
import './App.css';
import ButtonGoHome from './ButtonGoHome';
import Options from './Options';

const Play = () => {

    const namePlayer = localStorage.getItem("namePlayer");    

    const [points, setPoints] = useState({
      playerOne: 0,
      playerTwo: 0
    })

    const [movePlayer, setMovePlayer] = useState({});

    const [moveBot, setMoveBot] = useState({});

    const [matchResult, setMatchResult] = useState({
      result: "",
      movePlayer: "",
      moveBot: ""
    });

    const setResult = () => {
      console.log("Jugada player", movePlayer)
      if (movePlayer.fortalezas.includes(moveBot.id)){
        setMatchResult({
          result: "GANO ".concat(namePlayer),
          movePlayer: movePlayer.id,
          moveBot: moveBot.id
        })
        setPoints({
          playerOne: points.playerOne + 1,
          playerTwo: points.playerTwo
        })
        console.log("Puntos jugadorUno:", points.playerOne,"Puntos jugadorDos: ", points.playerTwo)
      }
      if(movePlayer.debilidades.includes(moveBot.id)){
        setMatchResult({
          result: "GANO BOT",
          movePlayer: movePlayer.id,
          moveBot: moveBot.id
        })
        setPoints({
          playerOne: points.playerOne,
          playerTwo: points.playerTwo + 1
        })
        console.log("Puntos jugadorUno:", points.playerOne,"Puntos jugadorDos: ", points.playerTwo)
      }
      if(movePlayer.neutral === moveBot.id){
        setMatchResult({
          result: "EMPATE",
          movePlayer: movePlayer.id,
          moveBot: moveBot.id})
      }
      setMovePlayer({})
    }
    
    return (
      <>
        <div className="elections-center">
          <div className="column component-center">
            <h2 className="elections-center margin-top">{namePlayer}</h2> 
            <h2 className="elections-center height margin-top red">{matchResult.movePlayer}</h2>
          </div>
          <div className="column component-center">
            <img src="/LogoJuego.png" style={{width: '12rem'}} className="component-center"/>
            <h2 className="component-center">VS</h2>
          </div>
          <div className="column component-center">
            <h2 className="elections-center margin-top">Bot</h2>
            <h2 className="elections-center height margin-top red">{matchResult.moveBot}</h2>
          </div>
        </div>
        <Options setMovePlayer={setMovePlayer} setMoveBot={setMoveBot} setResult={setMatchResult}/>
        <div className="elections-center">
          <div className="column component-center">
            <h1>{points.playerOne}</h1>
          </div>
          <div className="column component-center">
            <div className="component-center">
              <button onClick={setResult} disabled={!movePlayer.id} className="btn btn-outline-danger button-size">
                Ver resultado
              </button>
            </div>  
            <h1 className="margin height">{matchResult.result}</h1>
          </div>
          <div className="column component-center">
              <h1>{points.playerTwo}</h1>
          </div>
        </div>
        <ButtonGoHome/>
      </>
    );
}

export default Play;