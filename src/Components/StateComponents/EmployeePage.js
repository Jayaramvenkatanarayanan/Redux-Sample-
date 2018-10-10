import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import EmployeeList from './EmployeeList'
import {fetchEmployee} from '../../Actions/EmployeePage'
class EmployeePage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchEmployee()
    }
    render() {
        return (
            <div>
                <p>This is Employee Page</p>
                <EmployeeList EmployeeList ={this.props.employee}/>
            </div>
        )
    }
}
EmployeePage.propTypes = {
    employee: PropTypes.array.isRequired,
    fetchEmployee: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {employee: state.employee}
}

export default connect(mapStateToProps, {fetchEmployee})(EmployeePage)