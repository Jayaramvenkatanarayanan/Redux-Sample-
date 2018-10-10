import React, {Component} from 'react'
import PropTypes from 'prop-types';

class EmployeeList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('****', this.props.EmployeeList)
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
            <div>
                {this.props.EmployeeList
                    ? employeeList
                    : emptyMessage}
            </div>
        );
    }
}

EmployeeList.propTypes = {
    EmployeeList: PropTypes.array.isRequired
}

export default EmployeeList;
