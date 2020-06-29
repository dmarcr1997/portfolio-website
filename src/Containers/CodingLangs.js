import React from 'react';
import Language from '../components/Language';
import Slider from 'infinite-react-carousel';
import MediaQuery from 'react-responsive';

const CodingLangs = () => {
    const rubyPic = require('../media/ruby.jpg')
    const railsPic = require('../media/rails.jpg')
    const rustPic = require('../media/rust.jpg')
    const cPic = require('../media/C.jpg')
    const pythPic = require('../media/python.jpg')
    const JavaSPic = require('../media/JavaS.jpg')
    const ReactPic = require('../media/logo.svg')
    let getSliders = (num) => {
            return(
                <Slider dots slidesPerRow={num}>
                    <div>
                        <Language name={'Ruby'} exp ={'Expert'} pic={rubyPic} text={"First Programming Language Taught at Flatiron. Created many CLIs and solved a mass of code challenges with this Language"}/>
                    </div>
                    <div>
                        <Language name={'Rails'} exp={'Expert'} pic={railsPic} text={"Created Many Full Stack applications using this Language. Also Used as an API on multiple projects"}/>
                    </div>
                    <div>
                        <Language name={"Rust"} exp={"Intermediate"} pic={rustPic} text={"Built many CLI projects. Experience in Larger Projects soon to come"}/>
                    </div>
                    <div>
                        <Language name={"C++"} exp={"Intermediate"} pic={cPic} text={"Built many CLI projects in college programming Classes. A little rusty but could pick up again easily"}/>
                    </div>
                    <div>
                        <Language name={"Python"} exp={"Intermediate"} pic={pythPic} text={"Have much experience in basic python, working towards using with machine learning and AIs"}/>
                    </div>
                    <div>
                        <Language name={"JavaScript"} exp={"Expert"} pic={JavaSPic} text={"Built many FullStack projects with this language. Built many algorithms and completed various coding challenges"}/>
                    </div>
                    <div>
                        <Language name={"React"} exp={"Expert"} pic={ReactPic} text={"Favorite Front end language. Built this site with pure React and many other projects"}/>
                    </div>
                </Slider>)
    }
    return(
        <>
            <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
                    {getSliders(3)}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                    {getSliders(1)}
            </MediaQuery>
        </>
          
    )
}

export default CodingLangs