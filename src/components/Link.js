import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
class Link extends Component{
    state = {
        isHover: false
    }
    
    handleMouse = () => {
        this.setState({
            isHovered: true
        })
    }
    
    renderColor = () => {
       if (this.state.isHovered === false)
        return 'white' 
       else
        return 'blue'
    }

    renderSize = () => {
        return this.state.isHovered ? 35 : 30
    }
    handleLeave = () => {
        this.setState({
            isHovered: false
        })
    }
    render(){
        let linkSty = {
            color: this.renderColor(),
            fontSize: this.renderSize(),
            textDecoration:'none'
        }
        return(
            <NavLink style={linkSty} onMouseEnter={() => this.handleMouse()}  onMouseLeave={() => this.handleLeave()} to={this.props.linkPath} exact>{this.props.name}\</NavLink>
        )
    }

}

export default Link