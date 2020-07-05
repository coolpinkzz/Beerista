import React,{Component}  from 'react';
import App from "../App";
import {Media} from 'reactstrap'



class Aboutus extends Component{
  render(){
    return(
      <div  className="aboutcard">
        <Media >
     <Media left href="#">
       <Media id="me"src="img\Capture.jpg" alt="Pratik profile" />
     </Media>
     <Media body>
       <Media heading>
         About Me
       </Media>
       This is Pratik Yadav, a Web Developer specialized in creating dynamic and creative websites which are fully optimized and fully responsive. I have been in this field for quite sometime now and I have good knowledge in Front-End Web-UI Framework with React , Amazon Web Services (AWS), Search Engine Optimisation,Wordpress and digital marketing. I have done many courses like Google analytics, Google Ads. I am a blogger and so I apply my overall thinking over things I work on. I worked on many live projects and I am currently working with Elan Academy. Elan Academy helped me to boost my skills. I am still evolving with my skills and working everyday to polish my skills
   </Media>
   </Media>
       </div>
    );
  }
}
export default Aboutus;
