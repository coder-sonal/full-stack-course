import React from 'react';
import TodoList from './TodoList';
import styles from './Todo.module.css';
import TodoComplete from './TodoComplete';

class TODO extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo : "",
            todoList:[],
        };
    };


    toggleTask = (pos, value) => {
        const copyTodoList = this.state.todoList;
        if(copyTodoList.length > 0 && copyTodoList[pos] && copyTodoList[pos].name === value) {
            copyTodoList[pos].isCompleted = !copyTodoList[pos].isCompleted;
            this.setState({
                todoList: copyTodoList,
            })
        }
    }
    
    render(){
        return(
            <div className={styles.todo}>
                <button onClick = {() =>{
                    if(this.state.todo !== "") {
                        this.setState({
                            todoPending: true,
                            todoList:[...this.state.todoList, {
                                name: this.state.todo,
                                isCompleted: false,
                            } ],
                            todo:"",
                        });
                    };
                    
                }}>ADD</button>
                <input className={styles.input1} name="nvjkdnjk" value = {this.state.todo} onChange = {(e) =>{
                    this.setState({
                        todo : e.target.value,
                    })
                }}/>
                <h3>TODO LIST</h3>
                {this.state.todoList.length > 0 ? <TodoList 
                todoList={this.state.todoList}
                toggleTask={this.toggleTask}
                 /> : null}

                <TodoComplete todoList={this.state.todoList} />
            </div>
            
        )
    }
}
export default TODO; 