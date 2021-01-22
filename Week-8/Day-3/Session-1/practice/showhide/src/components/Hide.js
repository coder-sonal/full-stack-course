import React from 'react';

class Hide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timer : 1,
        }
        this.counter()
        };
        counter = ()=>{
            this.count = setInterval(()=>{
                this.setState({
                    timer:this.state.timer+1})
                },1000);
        };
        render(){
            return(
                <div>
                    <div>
                        CountDown: {this.state.timer}
                    </div>
                    <button onClick={()=>{this.props.hide()}}>Hide Buttom</button>
                </div>
            );
        };
    };

export default Hide;
