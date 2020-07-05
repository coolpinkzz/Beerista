import React,{Component}  from 'react';
import App from "../App";



class Contactus extends Component {
  render(){
    return(
      <div className="container">
        <div  className="row">
          <div  className="mx-auto">
            <h1> Contact us  </h1>
          </div>
        </div>
        <div className="row">
          <div id="contact" className="col-12 col-sm-6">
            <h5>Email : masterpratikyadav@gmail.com </h5>
            <h5>Mobile : 9632967897</h5>
            <h5>Address : RNS Institute of Technology , RR Nagar Bangalore, 560098</h5>
            <h5>Linkedin Profile : <a href='https://www.linkedin.com/in/pratikyadavdeveloper/'>Click Me</a></h5>
            <h5>Git Hub : <a href='https://www.linkedin.com/in/pratikyadavdeveloper/'>Click Me</a> </h5>
          </div>
        <div className="col-12 col-sm-6 text-right ">
            <h5>Linkedin Profile</h5>
  <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="pratikyadavdeveloper"><a class="LI-simple-link" href='https://in.linkedin.com/in/pratikyadavdeveloper?trk=profile-badge'>Pratik Yadav</a></div>
          </div>

        </div>



      </div>



    );
  }
}
export default Contactus;
