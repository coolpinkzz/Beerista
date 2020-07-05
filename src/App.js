import React  from 'react';
import { BrowserRouter ,Route, Switch } from "react-router-dom";

import './App.css';
import Contactus from "./components/ContactusComponent"
import Home from "./components/HomeComponent"
import Aboutus from "./components/AboutusComponent"
import Header from "./components/HeaderComponent"
import CardDetail from "./components/CardComponent"

function App() {
  return (
    <div className="App">


          <BrowserRouter>
            <Header/>
            <Switch >
              <Route path="/home" component={Home} />
              <Route path="/aboutus" component={Aboutus} />
              <Route path="/contactus" component={Contactus} />


            </Switch>



      </BrowserRouter>


    </div>
  );
}

export default App;
