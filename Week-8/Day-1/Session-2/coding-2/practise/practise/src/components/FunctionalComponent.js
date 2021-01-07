import React from 'react';

const FunctionalComponent = props => {
    console.log(props);

    return (
        <div>
            {    
                Object.keys(props).map(val => {
                    return (
                        <div>
                            <ul>
                                <li><h2>{props[val].heading}</h2></li>
                                <li>{props[val].one}</li>
                                <li>{props[val].two}</li>
                                <li>{props[val].three}</li>
                                <li>{props[val].four}</li>
                            </ul>   
                        </div>
                    );
            })}
        </div>
    );

}

export default FunctionalComponent;