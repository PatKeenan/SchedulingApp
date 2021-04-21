import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Nav from "./components/Navigation/Nav";
import Showings from "./pages/Showings";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/showings" component={Showings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
