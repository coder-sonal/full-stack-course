import React from 'react';

class TodoComplete extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <h3>SHOW TODO COMPLETED LIST</h3>
               {this.props.todoList.length >= 1 && this.props.todoList.map((val,index) => {
                   if(val.isCompleted) {
                    return(
                        <div>
                            <input type="checkbox" id={val.name} 
                            onChange={() => this.props.toggleTask(index, val.name)} />
                            <label style={{textDecorationLine: "line-through"}}>{val.name}</label>
                        </div>
                    )
                }
               })}
            </div>
        );
    };
};
export default TodoComplete;