import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Project = (props) => {
    const imgStyl = {
        width: '95%',
        height: '30em'
    }
    const cardStyle = {
        width: '100%',
        height: '70em',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        paddingTop: '10%'
    }
    let buttonSty = {
      padding: '.25em',
      background: 'blue',
      color: 'white',
      borderRadius:'10px',
      textDecoration: 'none'
    }
    return(
    <Card style={cardStyle}>
    <Card.Img variant="top" src={props.image} style={imgStyl}/>
    <Card.Body>
        <Card.Title><h2>{props.name}</h2></Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        <Button variant="primary" style={buttonSty} href={props.repo}>Project Repo</Button><br/><br/><br/>
        <Button variant="primary" style={buttonSty} href={props.demo}>Demo</Button>
      
    </Card.Body>
    </Card>
    )
}

export default Project