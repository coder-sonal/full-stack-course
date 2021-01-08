import React from 'react';
import ColorfullButtons from './ColorfullButtons';

class ButtonGame extends React.Component{
   render(){
    const color = {
        One : "red",
        Two : "blue",
        Three : "pink",
        Four : "grey",
        Five : "green",
    }
    const label= {
        red : "JOIN US",
        blue : "SETTINGS",
        pink : "LOGIN",
        grey : "SEARCH",
        green : "HOME",
    }
    return(
        <ColorfullButtons buttonColor={color} buttonLabel={label} />
    )
   }
}
export default ButtonGame;