import React,{Component}  from 'react';
import {Navbar,Button, Nav, NavLink,Container,Jumbotron } from 'react-bootstrap';

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
            <Navbar.Brand href="/">Quarantine with us</Navbar.Brand>
              <Nav className="mr-auto">
                <div>

                </div>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About</Nav.Link>
                <Nav.Link href="/contactus">Contact us</Nav.Link>
              </Nav>

          </Container>


          </Navbar>






      </div>

    );
  }
}
export default Header;
