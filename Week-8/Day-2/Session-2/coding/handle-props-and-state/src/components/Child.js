import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val: props.stateData,
        }
    };
    render(){
        return(
            <div>
                <h5>This list won't change when you press add with setSate</h5>
                <ul>
                    {this.state.val.map(item =>{
                        return(
                            <li key = {item.name + "val"}>{item.name}</li>
                        )
                    })}
                </ul>
                <h5>
                    ADD WITH SETSTATE 
                    <br></br>
                    This list will change when you press add with setState.
                </h5>
                <ul>
                    {this.props.stateData.map(item =>{
                        return(
                            <li key = {item.name + "set-data"}>{item.name}</li>
                        )
                    })}
                </ul>
                <h5>
                    ADD WITHOUT SETSTATE
                    <br></br>
                    This list will not change when you press add without setState , it will change when there is a change in the DOM.
                </h5>
                <ul>
                    {this.props.stateLessData.map( item =>{
                        return(
                            <li key = {item.name + "data-data"}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Child;