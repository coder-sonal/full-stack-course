import React from 'react';
import Hide from './Hide'

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false
        };
    };
    changestate = () =>{
        this.setState({
            show : !this.state.show
        })
    };
    render(){
        return(
            <div>
                <div>
                    {this.state.show ? (<Hide hide={this.changestate}/>) : (<button onClick ={()=> {this.changestate()}}>SHOW</button>) }
                    
                </div>
                
            </div>
        );
    };
};

export default Show;