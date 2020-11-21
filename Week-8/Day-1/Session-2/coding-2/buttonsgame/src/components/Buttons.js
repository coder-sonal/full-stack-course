import React from 'react';
import './Buttons.css'

class Buttons extends React.Component{
    render(){
        return(
            <div class="div">
                <button  class="button"  style={{backgroundColor:this.props.color}}>{this.props.name}</button>
            </div>
        )
    }
}
export default Buttons;