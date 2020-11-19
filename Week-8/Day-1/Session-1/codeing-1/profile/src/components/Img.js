import React from 'react';
import './Pro.css';
import Intro from './Intro';
import Buttons from './Button';
import Skill from './Skill'
const Img = () =>{
    return (
       <div class="mainBody">
            <div class="body">
                <div class="header">
                    <div><p class='para'>PRO</p></div>
                    <div><img class="image" src="./profilepic.jpeg" height="120" width ="120"></img></div>
                </div>
                <Intro />
                <Buttons />
                <Skill />
            </div>
       </div>
    )
}
export default Img;