import React, {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Link from './Link';

class NavBar extends Component{
    state = {
        isHovered: false
    }
    capitalize(word){
        return `${word.charAt(0).toUpperCase() + word.slice(1)}`;
    }

    render(){
        let path 
        let navBar = {
            border: '10px solid black',
            paddingTop: '.25%',
            paddingBottom: '.25%',
            display: 'flex',
            flex: 'row'
        }
        
        return(
            <Row style={navBar}>
                {this.props.links.map(link => {
                    if (link !== 'home') path = link;
                    else path = '/';
                    return (
                        <Link linkPath={`${path}`} name= {this.capitalize(link)}/>)
                })}
            </Row> 
        )
    }
}
export default NavBar
 