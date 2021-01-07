import React from 'react';

class MobileManufacturer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manufacture: {
                first : 'Samsung',
                second : 'HTC',
                third : 'Micromax',
                fourth : 'Apple'
            }
        }
    }
    render(){
        console.log(this.props, this.state);
        return(
            <div>
                <div>
                    <h2>Operating System</h2>
                    <ul>
                        <li>{this.props.state.operatingSystem.osOne}</li>
                        <li>{this.props.state.operatingSystem.osTwo}</li>
                        <li>{this.props.state.operatingSystem.osThree}</li>
                        <li>{this.props.state.operatingSystem.osfour}</li>
                    </ul>
                </div>
                <div>
                    <h2>Mobile Manufacturers</h2>
                    <ul>
                        <li>{this.state.manufacture.first}</li>
                        <li>{this.state.manufacture.second}</li>
                        <li>{this.state.manufacture.third}</li>
                        <li>{this.state.manufacture.fourth}</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default MobileManufacturer;