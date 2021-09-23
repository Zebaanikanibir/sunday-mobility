
import './App.css';

import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      
        <Route path="/login">
         <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/">
            <Register></Register>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
