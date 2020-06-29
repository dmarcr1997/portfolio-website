import React from 'react';
import Card from 'react-bootstrap/Card';
import { Checkmark } from 'react-checkmark';
const Language = (props) => {
    let renderExp = () => {
        switch(props.exp){
            
            case "Beginner":
                return(
                    <small className="text-muted">Experience:
                        <h5>Beginner<Checkmark size='small' color='blue'/></h5>
                        <h5>Intermediate</h5>
                        <h5>Expert</h5>
                    </small>
                )
            case "Intermediate":
                return(
                    <small className="text-muted">Experience:
                
                        <h5>Beginner</h5>
                        <h5>Intermediate<Checkmark size='small' color='blue'/></h5>
                        <h5>Expert</h5>
                     
                </small>
                )
            case "Expert":
                return(
                    <small className="text-muted">Experience:
                
                        <h5>Beginner</h5>
                        <h5>Intermediate</h5>
                        <h5>Expert<Checkmark size='small' color='blue'/></h5>
                     
                </small>
                )
            default:
                return(
                    <small className="text-muted">Experience:
                
                        <h5>Beginner</h5>
                        <h5>Intermediate</h5>
                        <h5>Expert</h5>
                     
                </small>
                )
        }
    }
    const imgStyl = {
        width: '30em',
        height: '30em'
    }
    const cardStyle = {
        width: '96%',
        height: '50em',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
    }
    return(
        <Card style={cardStyle}>
        <Card.Img variant="top" src={props.pic} style={imgStyl} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        {renderExp()}
        </Card.Footer>
        </Card>

    )
}

export default Language