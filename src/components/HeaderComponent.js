import React,{Component}  from 'react';
import {Navbar,Button, Nav, NavLink,Container,Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../App"


class Header extends Component {


  constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
  render(){
    return(
      <div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Quarantine with us</Navbar.Brand>
              <Nav className="mr-auto">
                <div>

                </div>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About us</Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
              </Nav>

          </Container>


          </Navbar>

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
                              <img src='img\headerimg.jpg' alt='header image' />


                            </div>
                        </div>
                    </div>
                </Jumbotron>




      </div>

    );
  }
}
export default Header;
