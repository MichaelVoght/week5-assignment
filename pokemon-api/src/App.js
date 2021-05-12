import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterPage from "./CharacterPage/CharacterPage";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/pokemon/:pokemon">
            <CharacterPage />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
