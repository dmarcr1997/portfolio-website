import React, {Component} from 'react';
import ResumePdf from '../media/DamonRochaResume.pdf';
class Resume extends Component {
     
      render() {
       
     
        return (
            <div>
                <h1>Click Link Below To View my Resume</h1>
                <a href='#' onClick={(event) => { event.preventDefault(); window.open(ResumePdf); }}>
                    My Resume
                </a>
            </div>
        );
      }
    }

export default Resume