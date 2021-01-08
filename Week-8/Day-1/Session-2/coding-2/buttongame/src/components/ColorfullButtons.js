import React from 'react';
import './index.css';

const ColorfullButtons = props => {
    return(
        Object.keys(props.buttonColor).map(val =>{
            return(
                <div>
                    <button style={{backgroundColor:props.buttonColor[val]}}>{props.buttonLabel[props.buttonColor[val]]}</button>
                </div>
            )
        }) 
    )
}
export default ColorfullButtons;