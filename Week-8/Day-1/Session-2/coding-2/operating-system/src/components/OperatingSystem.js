import  React from 'react';
import MobileManufacturer from './MobileManufacturer';

class OperatingSystem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            operatingSystem : {osOne : 'Android',
                osTwo : 'Blackberry',
                osThree : 'iPhone',
                osfour : 'Windows Phone'
            }
        }
    }
    render(){
        return(
           <div>
                <MobileManufacturer state = {this.state} />
           </div>
        )
    }
}
export default OperatingSystem;
