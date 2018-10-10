import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import EmployeeList from './EmployeeList'
import {fetchEmployee} from '../../Redux/Employee/actions'
class EmployeePage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this
            .props
            .fetchEmployee()

    }
    render() {
        return (
            <div>
                <p>This is Employee Page with department</p>
                <EmployeeList EmployeeList ={this.props.Employee}/>
            </div>
        )
    }
}
EmployeePage.propTypes = {
    Employee: PropTypes.array.isRequired,
    fetchEmployee: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    console.log('employee', state.Employee)
    return {Employee: state.Employee}
}

export default connect(mapStateToProps, {fetchEmployee})(EmployeePage)