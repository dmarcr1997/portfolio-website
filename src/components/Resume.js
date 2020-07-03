import React, {Component} from 'react';
import ResumePdf from '../media/DamonRochaResume.pdf';
import FileIc from '../media/fileIcon.jpg';
class Resume extends Component {
     
      render() {
       
        const resumeStyle ={
            fontSize:'medium',
            color: 'white',
            paddingBottom: '10em'
        }
        const imageSty = {
            width:'5%',
            height: '5%'
        }
        return (
            <div style={resumeStyle}>
                <h1>Click Link To View my Resume</h1>
                <a href='#' onClick={(event) => { event.preventDefault(); window.open(ResumePdf); }}>
                    <img style={imageSty} src={FileIc} alt = 'My Resume'/>
                </a>
            </div>
        );
      }
    }

export default Resume