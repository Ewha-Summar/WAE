import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './pages/MainPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </Router>
  );
}

export default App;
