import React from 'react';

class TodoComplete extends React.Component{
    render(){
        return(
            <div>
                <h2>SHOW COMPLETED TODOLIST</h2>
                {this.props.todoList.map((val,index) =>{
                    if(val.isCompleted){
                        return(
                            <div>
                                <input type="checkBox" onChange = {() =>{
                                    this.props.addToList(val,index)
                                }}/>
                                <label style={{textDecorationLine: "line-through"}}>{val.name}</label>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}
export default TodoComplete;
