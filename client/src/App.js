import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Components/Login.js'
import SignUp from "./Components/Signup.js";
import MainPage from './Components/MainPage.js'
import CharacterSelect from "./Components/CharacterSelect.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/character_select">
            <CharacterSelect />
          </Route>
          <Route path="/character">
            <MainPage />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;