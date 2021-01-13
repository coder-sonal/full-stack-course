import React from 'react';
import Child from './Child';

class HandelPrposAndState extends React.Component{
    constructor(props){
        super(props);
        //storing info in this.state;
        this.state = {
            data : [
                {name:"Masai"}, {name : "School"}, {name : "Banglore"}
            ],
        };
        this.data = [
            {name: "Sonal"} , {name: "Singh"}, {name: "Gorakhpur"}
        ];
    };
    addToData = () =>{
        this.setState ({
            data : [...this.state.data, {name : "New Value"}]
        });
    };
    addToDataWithoutState = () => {
        this.data.push({name: "And New Value"});
        console.log("value of data", this.data);
    };
    render(){
        return(
            <div>
                <Child stateData = {this.state.data} stateLessData = {this.data} />
                <button onClick = {() =>
                    this.addToData()}>
                    Add with setState
                </button>
                <button onClick = {() =>
                    this.addToDataWithoutState()}>Add without State
                </button>
            </div>
        )
    }
}
export default HandelPrposAndState;