import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:"",
            DOB:"",
            gender:"",
            location:"",
            qualification:""
        }
    }

    sendAllData = () => {
        const fillerData = {
            fname: this.state.fName,
            lname: this.state.lName,
            DOB: this.state.DOB,
            gender: this.state.gender,
            location: this.state.location,
            qual: this.state.qualification,
        }

        this.props.addNewFormFiller(fillerData);
    }

    render() {
        return (
            <div>
                <h3>Require Details</h3>
                <div>
                    <label>First Name</label>
                    <input value= {this.state.fName} onChange={(e)=>{
                        this.setState({
                            fName: e.target.value,
                        })
                    }}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input value = {this.state.lName} onChange = {(e) =>{
                        this.setState({
                            lName : e.target.value,
                        })
                    }} />
                </div>
                <div>
                    <label>Date Of Birth</label>
                    <input value = {this.state.DOB} type = "date" onChange = {(e) =>{
                        this.setState({
                            DOB : e.target.value,
                        })
                    }}/>
                </div>
                <div>Gender
                    <input type="radio" name="gender" value="Male" onClick = {(e) =>{
                        this.setState({
                            gender : e.target.value
                        })
                    }} />
                    <label>Male</label>
                    <input type="radio" name="gender" value="Female" onClick = {(e) =>{
                        this.setState({
                            gender : e.target.value,
                        })
                    }} />
                    <label >Female</label>
                </div>
                <div>
                    <label>Location</label>
                    <input value = {this.state.location} onChange = {(e) =>{
                        this.setState({
                            location : e.target.value
                        })
                    } } />
                </div>
                <div>
                    <label>Highest Education</label>
                    <input value = {this.state.qualification} onChange = {(e) =>{
                        this.setState({
                            qualification : e.target.value,
                        })
                    }} />
                </div>
                <div>
                    <button onClick={() => this.sendAllData()}>Submit</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}

export default Form;