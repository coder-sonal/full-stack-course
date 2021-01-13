import React, {Component} from 'react';
import Form from './Form';
import ShowData from './ShowData';

class Submission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            showDetails:false,
            allData: [],
        }
    }

    addNewFormFiller = fillerData => {
        this.setState({
            allData: [...this.state.allData, fillerData],
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        showForm: !this.state.showForm,
                        showDetails: false,
                    })
                }}>
                    {this.state.showForm ? "Hide Form" : "Show From" }
                </button>
                <button onClick ={() => {
                    this.setState({
                        showDetails:!this.state.showDetails,
                        showForm : false,
                    })
                }}>
                    {this.state.showDetails ? "Hide Details" : "Show Form Details"}
                </button>

                {this.state.showForm ? <Form
                addNewFormFiller = {this.addNewFormFiller}
                /> : null}
                {this.state.showDetails ? <ShowData allFilledData = {this.state.allData} /> :null}
            </div>
        );
    }
}

export default Submission;