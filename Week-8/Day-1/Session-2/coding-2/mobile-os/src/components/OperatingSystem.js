import React from 'react';

class OperatingSystem extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.name}</li>
                </ul>
            </div>
        )
    }
}
export default OperatingSystem