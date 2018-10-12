import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './employeeList.css'
class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emplist: {}
        }

    }

    static getDerivedStateFromProps(props, state) {
        if (props.EmployeeList !== state.emplist) {
            return {emplist: props.EmployeeList};
        }
        return null;
    }
    listEmp = (list) =>{
       if(list.result && list.result.length>0){
           return list.result.map((emp)=>
               <tr key={emp._id}>
                <td data-label="Name">{emp.username}</td>
                <td data-label="Email">{emp.email}</td>
                <td data-label="Password">{emp.password}</td>
                </tr>
        )
       }
    }
    render() {
        const emptyMessage = (
            <p>No Employees are found
            </p>
        )
        const employeeList = (
            <p>GamesList</p>
        )
        return (
            <div className='Page'>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.listEmp(this.state.emplist)}
                    </tbody>
                </table>
            </div>
        );
    }
}

EmployeeList.propTypes = {
    EmployeeList: PropTypes.array.isRequired
}

export default EmployeeList;
