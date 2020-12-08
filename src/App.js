import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Home';
import Play from './Play';

const App = () => {

  return(
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/play" component={Play}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
