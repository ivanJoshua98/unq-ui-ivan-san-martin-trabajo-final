import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const [namePlayer, setNamePlayer] = useState("");   

    const [error, setError] = useState("");
    
    const handleNameChange = (event) => {
      setNamePlayer(event.target.value)
      setError("")
      localStorage.setItem("namePlayer", namePlayer);
    };  
    
    const handleClick = () => {
      if(namePlayer.length === 0){
        setError(
          <a className="alert alert-danger margin-top">Ingrese algun nombre</a>
        )
      }
      else {
        history.push("/play")
      }
    };   
    
    return (
      <div className="container" style={{padding: '25px 10px'}}>
        <div className="row">
          <div className=" col-md-4 main">
              <h1 className="component-center">Piedra Papel Tijera</h1>
              <h1 className="component-center">Lagarto Spock</h1>
            <div className="component-center">
              {error}
              <input onChange={handleNameChange} placeholder="Ingrese nombre jugador" className="form-control margin-top"/> 
              <button onClick={handleClick} className="btn btn-outline-danger margin">
                  Iniciar Partida
              </button>
            </div>
          </div>
          <div className="col-md-4 margin-top">
            <img src="/the-big-bang-theory.png" style={{width: '45rem'}}/>
          </div>
        </div>
      </div>
    );
}

export default Home;