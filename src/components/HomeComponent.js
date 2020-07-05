import React,{Component}  from 'react';
import {Navbar,Button, Nav, NavLink,Container,Jumbotron } from 'react-bootstrap';
import App from "../App";
import CardDetail from './CardComponent'


class Home extends Component {
  render(){
    return(
      <div>
        <Jumbotron>
                  <div className="container">
                      <div className="row row-header">
                          <div className="col-12 col-sm-6">
                              <h1>Quaratine with us</h1>
                              <p><strong>Quarantine is hard. Quarantine is boring.  </strong></p>
                              <p>We hear you. </p>
                              <p> That’s why we’ve curated some uber cool services, tools and a bunch of unbelievable online activities for you and your family. </p>
                              <p> And as if that’s not enough, these are hand-picked for crazy discounts! So, go on. Dig in, find something you love and stay sane. You can thank us later </p>
                              <Button variant="secondary">Contribute</Button>
                       </div>
                        <div className="col-12 col-sm-6 ">
                            <img id="headerimg"src='img\headerimg.jpg' alt='header image' />


                          </div>
                      </div>
                  </div>
              </Jumbotron>

              <CardDetail/>


      </div>




    );
  }
}

export default Home;
