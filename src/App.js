import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import Projects from './Containers/Projects';
import Container from 'react-bootstrap/Container';
import Blog from './Containers/Blog';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import flatiron from './media/flatiron.jpg';
import Image from 'react-bootstrap/Image';
import profPic from './media/headShot.jpg';
// import Welcome from './components/Welcome';
class App extends Component{
  render(){
    const headStyle = {
      textAlign: "center",
      borderRadius: '10px',
  }
  const picStyle = {
    alignSelf: 'center',
    borderRadius: '30px',
    width: '100%',
    height: '75%'
  }
    return (
      <Router>
        <div className="App">
          <header className="App-header">      
          <Container fluid>
            <Row>
              <Jumbotron>
               
                <div className= 'contactCard'>
                  <h2>
                    Damon Rocha
                  </h2>
                  Phone: 903-818-3759<br/>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/in/dmr4414/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a><br/>
                <a 
                  className="App-link"
                  href="dmarcr1997@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >dmarcr1997@gmail.com</a><br/>
                 
                <a href="https://dev.to/dmarcr1997">
                  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Damon Marc Rocha II's DEV Profile" height="30" width="30"/>
                </a>
                <img src={flatiron} className='FlatLogo' alt ='flatiron logo'/>
                </div>
                <div style={headStyle}>
                  <Image src={profPic} style = {picStyle}/>
                </div>
              </Jumbotron>
              <NavBar links={['home', 'blog', 'projects', 'resume']} />
          </Row>
            
          </Container>
          </header>
          <Container>
            <Row><Col></Col></Row>
            <Row><Col></Col></Row>
          </Container>
          <div className='contbody'>
            <Route path='/' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/blog' exact component={Blog} />
          </div>
          </div>
        </Router>
        
        
       
    );
  }
}

export default App;
