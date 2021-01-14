import React from 'react';


class TodoList extends React.Component{
    
    render(){
        return(
           <div>
               {this.props.todoList.length >= 1 && this.props.todoList.map((val,index) => {
                   if(!val.isCompleted) {
                    return(
                        <div>
                            <input type="checkbox" id={val.name}
                            onChange={() => this.props.toggleTask(index, val.name)} />
                            <label>{val.name}</label>
                        </div>
                    )
                }
               })}
           </div>
        )
    }
}
export default TodoList; 