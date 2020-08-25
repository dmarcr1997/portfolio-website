import React from 'react'
import About from './About'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CodingLangs from '../Containers/CodingLangs.js';
const Home = () =>{

    const jumbo2Style ={
        float: 'right',
        background: '#00001a',
        color: '#e6ffff',
        width: '100%',
        marginBottom: '15em'
    }

    const codeStyle = {
        paddingTop: '2%',
        textAlign: 'justify',
        borderRadius: '30px',
        background: '#00001a',
        color: '#e6ffff',
        width: '100%',
    }
 
    const pageStyle = {
        background: 'black'
    }

    let generateInterests = () => {
        let interests = ['Electrical Engineering', 'Arduino', 'Space Science']
        return(interests.map(inter => <li><p>{inter}</p></li>))
    }
    let generateEducation = () => {
        let Education = ['Associates Computer Science', 'Flatiron Alum']
        return( Education.map(ed => <li><p>{ed}</p></li>))
    }
   
    return(
    <div style={pageStyle}>
        <Container style={{color:'whitesmoke', marginBottom: '5em'}}>
            <h1>
                Hi, my name is Damon Rocha
            </h1>
            <Table style={{fontSize: '1em'}} striped bordered hover>
                <thead>
                    <tr>
                        <th>Interests</th>
                        <th>Education</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><ul>{generateInterests()}</ul></td>
                        <td><ul>{generateEducation()}</ul></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <div style={pageStyle}>{'>>>>>>>>>>>'}</div>
        <Jumbotron style={jumbo2Style}>
            <About />
        </Jumbotron>
        <CodingLangs/>
    </div>)
}

export default Home

