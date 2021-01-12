import React from 'react';
import Multiple from './Multiple';
import styles from './Todo.module.css'

class Todo extends React.Component{
    render(){
        return(
            <div>
                <h3 className={styles.header}>TODO List</h3>
                <Multiple />
            </div>
        )
    }
}
export default Todo;