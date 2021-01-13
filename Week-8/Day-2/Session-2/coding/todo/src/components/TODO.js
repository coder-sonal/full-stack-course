import React from 'react';
import TodoList from './TodoList'

class TODO extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo : "",
            todoPending : false,
        };
    };
    render(){
        console.log(this.state)
        return(
            <div>
                <button onClick = {() =>{
                    this.setState({
                        todoPending : true,
                    })
                }}>+</button>
                <input value = {this.state.todo} onChange = {(e) =>{
                    this.setState({
                        todo : e.target.value,
                    })
                }}/>
                {this.state.todoPending ? <TodoList todoList={this.state.todo} /> : null}
            </div>
            
        )
    }
}
export default TODO; 