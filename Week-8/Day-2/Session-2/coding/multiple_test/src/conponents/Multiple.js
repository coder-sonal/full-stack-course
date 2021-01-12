import React from 'react';
import styles from './list.module.css'

class Multiple extends React.Component{
    render(){
        return(
            <div>
                <ul className={styles.list}>
                    <li>Shopping</li>
                    <li>Coding</li>
                    <li>Cooking</li>
                    <li>Driving</li>
                    <li>Watching TV</li>
                </ul>
            </div>
        )
    }
}
export default Multiple;