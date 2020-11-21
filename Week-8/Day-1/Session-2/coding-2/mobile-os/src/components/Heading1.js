import React from 'react';

class Heading1 extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default Heading1;