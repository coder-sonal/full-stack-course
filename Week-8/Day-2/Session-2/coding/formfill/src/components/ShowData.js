import React, {Component} from 'react';

class ShowData extends Component {
    render() {
        return (
            <div>
                 <div>
                    <h3>Filled Form Details</h3>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Location</th>
                            <th>Qualification</th>
                        </tr>
                    </table>
                 </div>
                {this.props.allFilledData.map(val =>{
                    console.log(val);
                    // debugger;
                    return(
                        <div>
                            <table>
                                <tr>
                                    <td>{val.fname}</td>
                                    <td>{val.lname}</td>
                                    <td>{val.DOB}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.location}</td>
                                    <td>{val.qual}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ShowData;
