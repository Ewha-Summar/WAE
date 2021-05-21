import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import './pages/MainPage'
=======
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Plan from "./pages/Plan"
import Alram from "./pages/Alarm"
import Overview from "./pages/Overview"
import Friends from "./pages/Friends"
import Chatting from "./pages/Chatting"
>>>>>>> d6272175cb896deaf53de7caa6a44e6f513ca1b5

function App() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </Router>
=======
        <Route exact path="/" component={Overview} />
        <Route exact path="/plan" component={Plan} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/chatting" component={Chatting} />
        <Route exact path="/alarm" component={Alram} />
      </Switch>
    </Router>

>>>>>>> d6272175cb896deaf53de7caa6a44e6f513ca1b5
  );
}

export default App;
