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
            <Switch Location >
              <Route path="/" component={Home} />
              <Route exactpath="/aboutus" component={Aboutus} />
              <Route exactpath="/contactus" component={Contactus} />


            </Switch>



      </BrowserRouter>


    </div>
  );
}

export default App;
