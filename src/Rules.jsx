import './App.css';
import ButtonGoHome from './ButtonGoHome';

const Rules = () => {

    return (
        <div className="container" style={{padding: '25px 10px'}}>
            <div className="row">
              <div className=" col-md-4 main">
                    <h1 className="component-center"> Reglas del juego</h1>
                    <p className="component-center red">Tijera corta a Papel</p>
                    <p className="component-center black">Papel tapa a Piedra</p>
                    <p className="component-center red">Piedra aplasta a Lagarto</p>
                    <p className="component-center black">Lagarto envenena a Spock</p>
                    <p className="component-center red">Spock rompe a Tijera</p>
                    <p className="component-center black">Tijera decapita a Lagarto</p>
                    <p className="component-center red">Lagarto devora a Papel</p>
                    <p className="component-center black">Papel desautoriza a Spock</p>
                    <p className="component-center red">Spock vaporiza a Piedra</p>
                    <p className="component-center black">Y como siempre, Piedra aplasta a Tijera</p>
                    <div className="margin">
                        <ButtonGoHome/>
                    </div>
                    
              </div>
              <div className="col-md-4 margin-top">
                <img src="/the-big-bang-theory.png" style={{width: '45rem'}}/>
              </div>
            </div>
        </div>
    )
};

export default Rules;
