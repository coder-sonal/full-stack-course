import React from 'react';

class TaskToDo extends React.Component{
    render(){
        return(
            this.props.taskList.map((val,index) =>{
                if(!val.isCompleted){
                    return(
                        <div>
                            <input type="checkBox" onChange = {()=>{
                                this.props.onSelect(index)
                            }}/>
                            <label >{val.name}</label>
                        </div>
                    )
                }
            })
        )
    }
}
export default TaskToDo;
