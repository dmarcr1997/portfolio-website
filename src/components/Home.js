import React from 'react'
import About from './About'
import Jumbotron from 'react-bootstrap/Jumbotron';

import CodingLangs from '../Containers/CodingLangs.js';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Home = () =>{

    const jumboStyle ={
        float: 'right',
        background: '#00001a',
        color: '#e6ffff',
        marginTop: 0,
        width: '100%',
        position: 'flex',
        paddingTop: '4%',
        paddingBottom: '4%'
    }
    const jumbo2Style ={
        float: 'right',
        background: '#00001a',
        color: '#e6ffff',
        width: '100%',
        margin: 0
    }

    const codeStyle = {
        paddingTop: '2%',
        textAlign: 'justify',
        borderRadius: '30px',
        background: '#00001a',
        color: '#e6ffff',
        width: '100%',
        margin: 0
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
    let generateWork = () => {
        let work = ['React/TypeScript', 'Sklearn', 'C++/Unreal']
        return(work.map(wrk => <li><p>{wrk}</p></li>))
    }

    return(
    <div style={pageStyle}>
        
        <Jumbotron style={jumboStyle}>
            <h1>
            Hi, my name is Damon Rocha
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Interests</th>
                        <th>Education</th>
                        <th>Weeks Work</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><ul>{generateInterests()}</ul></td>
                        <td><ul>{generateEducation()}</ul></td>
                        <td><ul>{generateWork()}</ul></td>
                    </tr>
                </tbody>
            </Table>
        </Jumbotron>
        <div style={pageStyle}>{'>>>>>>>>>>>'}</div>
        <Jumbotron style={jumbo2Style}>
            
            <About />
        </Jumbotron>
        <div style={pageStyle}>{'>>>>>>>>>>>'}</div>
        <Container style={codeStyle}>
            <h1>Coding Languages</h1>
            <CodingLangs />
        </Container>



    </div>)
}

export default Home

