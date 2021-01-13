import React from 'react';
import styles from './Index.module.css';
import './index.css'

var style3 = {
    fontSize: 30,
    background: "teal"
  };
const style4 = {
    borderRadius : 20,
}
var style1 = "class3";
var style2 = "class4"
const Index = () =>{
    return(
        <div className="Index">
            <button className= {styles.classExample}>test</button>
            <div>
                <button style = {style3}>One</button>
            </div>
            <div>
                <button style = {{background: "blue" , fontSize:30}}>Two</button>
            </div>
            <div>
                <button style = {{background: "blue" , fontSize: "30px"}}>Three</button>
            </div>
            <div>
                <button  className= "class1">Four</button>
            </div>
            <div>
                <button className = "class1, class2">Five</button>
            </div>
            <div>
                <button className = {`${style1}`}>Six</button>
            </div>
            <div>
                <button className = {`${style1} ${style2}`}>Seven</button>
            </div>
            <div>
                <button style = {{...style3, ...style4}}>Eight</button>
            </div>
            <div>
                <button className = {[style1 , style2].join(" ")}>Nine</button>
            </div>
        </div>
    )
}
export default Index;