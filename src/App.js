import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Plan from "./pages/Plan"
import Alram from "./pages/Alarm"
import Overview from "./pages/Overview"
import Friends from "./pages/Friends"
import Chatting from "./pages/Chatting"
import AddTodo from "./pages/AddTodo"
import ChatWindow from "./pages/ChatWindow"
import AddFriends from "./pages/AddFriends"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route exact path="/plan" component={Plan} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/chatting" component={Chatting} />
        <Route exact path="/alarm" component={Alram} />
        <Route exact path="/addTodo" component={AddTodo} />
        <Route exact path="/chatwindow/:friend_id" component={ChatWindow} />
        <Route exact path="/addfriends" component={AddFriends} />
      </Switch>
    </Router>
  );
}

export default App;
