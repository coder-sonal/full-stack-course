import React from 'react';
import TodoComplete from './TodoComplete';
import styles from './TdoList.module.css';
import TaskToDo from './TaskToDo';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo : "",
            todoList : [],
        };
    };

    onSelectTodo = pos =>{
        const dummyList = this.state.todoList;
        dummyList[pos].isCompleted = true;
        this.setState({
            todoList : dummyList
        })
    };
    addToList = (val,index) =>{
        const dummyList = this.state.todoList;
        dummyList[index].isCompleted = false;
        this.setState({
            todoList : dummyList
        })
    }

    _handleNewItem = (e) => {
        this.setState({
            todo: e.target.value
        });
        if ((e.code === "Enter" || e.keyCode === 13) && this.state.todo.length !==0) {
            this.setState({
                todoList : [...this.state.todoList , {
                    name : this.state.todo,
                    isCompleted : false,
                }],
                todo :""
            });
            return;
        }
        
    }

    render(){
        return(
            <div className={styles.main}>
                <div className={styles.todoList}>
                    <button onClick = {() =>{
                        if (this.state.todo.length !==0){
                            this.setState({
                                todoList : [...this.state.todoList , {
                                    name : this.state.todo,
                                    isCompleted : false,
                                }],
                                todo :""
                            });
                        };
                    }}>ADD</button>
                    <input 
                    type="text"
                    onKeyDown = {this._handleNewItem}
                    />
                    <h2>TODO LIST</h2>
                    {this.state.todoList.length > 0 ?
                        <TaskToDo taskList = {this.state.todoList} onSelect = {this.onSelectTodo}/>:null
                    }
                    
                </div>
                <div className={styles.todoComplete}><TodoComplete todoList ={this.state.todoList} addToList= {this.addToList}/></div>
            </div>
        );
    };
};
export default TodoList;