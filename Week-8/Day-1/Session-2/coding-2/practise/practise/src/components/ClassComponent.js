import React from 'react';
import FunctionalComponent from "./FunctionalComponent";

class ClassComponent extends React.Component {
    render() {
        const os = {
            heading: "Operating System",
            one: "Android",
            two: "iPhone",
            three: "Windows Phone",
            four: "Blackberry",
        };

        const manufac = {
            heading: "Mobile Manufacturer",
            one: "Apple",
            two: "Samsung",
            three: "Micromax",
            four: "HTC",
        };

        return(
            <FunctionalComponent oss={os} manufacc={manufac} />
        );
    }
}

export default ClassComponent;