import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.todoList);
        return(
           <div>
               <input type="checkbox" />
               <label>{this.props.todoList}</label><br></br>
           </div>
        )
    }
}
export default TodoList; 