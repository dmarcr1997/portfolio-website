import React, { Component } from 'react';
import Project from '../components/Project';
import Slider from 'infinite-react-carousel';
import CLIProj from '../media/CLIGIF.gif';
import RustCLI from '../media/RustCLI.gif';
import SINAProj from '../media/SinatraGif.gif';
import RAILSProj from '../media/RailsGif.gif';
import JavaSProj from '../media/JavaScriptGif.gif'; 
import ReactProj from '../media/AdvanceMeGif2.gif';
class Projects extends Component{

    renderSlider(num){
        return(
            <Slider dots slidesPerRow={num}>
                <div>
                    <Project name={'EventCog'} demo={'https://youtu.be/tjFPsWBWe5M'} image={CLIProj} text={'CLI application to find upcoming events in the United States using a TicketMaster API'} repo={'https://github.com/dmarcr1997/EventCog_CLI_Project'}/>
                </div>
                <div>
                    <Project name={'Morse Decoder'} demo={'https://youtu.be/twHXWNA6P0w'} image={RustCLI} text={'Rust CLI application to decode or encode morse message'} repo={'https://github.com/dmarcr1997/rust_morse_code_decoder_cli'}/>
                </div>
                <div>
                    <Project name={'Assignment Hog'} demo={'https://youtu.be/q3J1jAKRQeo'} image={SINAProj} text={'This is an assignments/class tracker application for a student; also doubles as a student messenger'} repo={'https://github.com/dmarcr1997/SinatraProj_AssignmentHog'}/>
                </div>
                <div>
                    <Project name={'Galaxy Scout'} demo={'https://youtu.be/Emud4GU9GgQ'} image={RAILSProj} text={'Space picture exploreer web application that uses a NASA API as the source of the images. A user of this application can view, create, edit, and delete space pictures. The app uses Ruby on Rails and Sqlite3'} repo={'https://github.com/dmarcr1997/GalaxyScout'}/>
                </div>
                <div>
                    <Project name={'SyntheticAi'} demo={'https://youtu.be/S-0TE-VRugI'} image={JavaSProj} text={'This app uses Brain.js to allow users to build and customize two types of basic neural networks Installation. Uses a Rails API back end and Javascript Front end'} repo={'https://github.com/dmarcr1997/synthetic-ai'}/>
                </div>
                <div>
                    <Project name={'ADVANCEME'} demo={'https://youtu.be/sGEeC6Ew_JM'} image={ReactProj} text={'This is a skill and goal tracker application that uses React and a Rails API to help you advance your goals. A user of this application can view, create, and update skills and goals.'} repo={'https://github.com/dmarcr1997/ADVANCEME'}/>
                </div>
            </Slider>

        )
    }
    render(){
        const projStyle = {
                paddingTop: '2%',
                textAlign: 'center',
                borderRadius: '30px',
                background: '#00001a',
                color: '#e6ffff',
                width: '100%',
            }
        return(
        <div style={projStyle}>
            <h1 style={{textAlign:'justify'}}>Projects</h1>
           {this.renderSlider(1)} 
          
        </div>)
    }
}

export default Projects
