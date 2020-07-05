import React,{Component}  from 'react';
import {Card,CardHeader,CardBody,CardTitle,CardText,Button ,Container,CardSubtitle ,Row,Col,InputGroup,Input,InputGroupAddon,InputGroupText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../App";
import axios from 'axios';

const carddetails=[
  {
    id:1,
    name:'123homeschool4me',
    description: '300,000+ FREE printable worksheets from toddlers to teens',
    tag: 'Toddlers, Kids, Parents ,Activity ,Free Fun ,Print item'
  },

  {
    id: 2,
    name:'Fitbit',
    description: 'Free Fitbit Premium content',
    tag: 'Free, Fitness, 90days, Unlimited free plan'
  },

  {
    id:3,
    name:'Mailchimp',
    description: 'up to three months of free service to elegible customers (up to 25 employees).',
    tag: 'Free Pro-plan, 3 month, Upto 25 employee, SAAS'
  },

  {
    id:4,
    name:'NASA Kids',
    description: 'This NASA initiative covers a wide range of topics including weather, climate, atmosphere, water, energy, plants, and animals.',
    tag: 'Free, Kids, Education'
  },

  {
    id:5,
    name:'Digitalocean',
    description: 'If you’re building or organizing something to help with the pandemic and need resources or visibility for your efforts, they can help.',
    tag: 'Free credits, SAAS'
  },

  {
    id:6,
    name:'Coursera',
    description: 'Tons of free classes from leading universities and companies',
    tag: 'Education, SAAS'
  },

  {
    id:7,
    name:'Slack',
    description: 'Slack is now offering "free upgrades to paid plans" for teams working on coronavirus research, response, or mitigation.',
    tag: 'Free, Pro-plan, COVID-19 support,channel, Healthcare department, Education, Non-profit, Researchers, Communities, SAAS'
  }
]

function searchingFor(term){
  return function(x){
    return x.fields.Name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class CardDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[],
      carddetails : carddetails,
      term: ''
    }
    this.searchHandler=this.searchHandler.bind(this);
  }



  componentDidMount() {
    axios.get(`https://api.airtable.com/v0/appvm9YvXhQ6cXt6W/Popular%20Beer%20Styles?api_key=keyrvMFzhia9d69qo`)
    .then(res => {

      this.setState({persons:res.data.records});
      console.log(this.state.persons);

    });

  }




  searchHandler(event){

    this.setState({term:event.target.value})
  }



  render(){




    const card = this.state.persons.filter(searchingFor(this.state.term)).map((details) =>{
      return(
        <Col key={details.id} sm='4'>
          <div className="cardgrid" >
            <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >

            <CardBody>
              <img className="offset-md-3"id='img'src={details.fields.Attachments[0].url}/>
              <CardText>{details.fields.Name}</CardText>
              <strong>Description</strong>
              <CardTitle id='des'>{details.fields.Description}</CardTitle>
              <Button>Get the Details ></Button>
            </CardBody>
          </Card>
          </div>
        </Col>


      );


    })

    const outer = this.state.persons.map((item) => {
      return(
        <div key={item.id}>
          <h3>{item.fields.Name}</h3>

        </div>
      );
    });


    return(
      <div>
      <Container>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Filter Offer</InputGroupText>
        </InputGroupAddon>
        <Input onChange={this.searchHandler} />
      </InputGroup>
        <Row>
          {card}
        </Row>






    </Container>
    </div>

    );
  }
}
export default CardDetail;
