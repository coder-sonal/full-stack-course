import React from 'react';

const MyComponent = props =>{
    let oddOrEven;
    if(props.foo % 2 == 0){
        oddOrEven = <strong>Even</strong>
    }else{
        oddOrEven = <strong>Odd</strong>
    };
    return(
        <div><strong>{props.foo} is an {oddOrEven} number</strong></div>
    )
}

export default MyComponent;