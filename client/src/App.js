import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Components/Login.js'
import SignUp from "./Components/Signup.js";
import MainPage from './Components/MainPage.js'

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
          <Route path="/home">
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