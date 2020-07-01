import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = (props) => {
    const imgStyl = {
        width: '80%',
        height: '30em',
        borderRadius: '10px'
        
    }
    const cardStyle = {
        width: '90%',
        height: '40em',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        background: '#00001a'
    }   
    let buttonSty = {
        padding: '.25em',
        background: 'blue',
        color: 'white',
        borderRadius:'10px',
        textDecoration: 'none'
      }
      console.log(props.information.url)
    return(
        <div>
            <Card style={cardStyle}>
                <Card.Img style={imgStyl} src={props.information.social_image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h2>{props.information.title}</h2></Card.Title>
                    <Card.Text>
                    <em>{props.information.description}<a style={buttonSty} href={props.information.url}>Read More</a></em>
                    </Card.Text>
                    <Card.Text>Last updated {props.information.edited_at}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br />
        </div>
    )
}

export default Blog