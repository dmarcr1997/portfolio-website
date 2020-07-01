import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = (props) => {
    const cardStyle = {
        textAlign: 'center',
        width: '100%'
    }
    const blogStyle = {
        width: '70%',
        border: '5px solid white',
        boxShadow: '2px 2px 2px white',
        borderRadius: '10px',
  
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
        <div style={cardStyle}>
            <Card style={blogStyle}>
                <Card.Img src={props.information.social_image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.information.title}</Card.Title>
                    <Card.Text>
                    {props.information.description}
                    </Card.Text>
                    <Card.Text>Last updated {props.information.edited_at}</Card.Text>
                    <a href={props.information.url}><button style={buttonSty}>Read</button></a>
                </Card.ImgOverlay>
            </Card>
            <br />
        </div>
    )
}

export default Blog