import { render } from '@testing-library/react';
import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        };
    };
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),
          1000
        );
      };
    
    componentWillUnmount(){
        clearInterval(this.timerId);
    };

    tick(){
        this.setState ({
            date : new Date() 
        });
    }
    
    render(){
        return(
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    };
};

export default Clock;