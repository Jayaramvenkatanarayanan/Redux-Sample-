import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import EmployeeList from './EmployeeList'
import {fetchEmployee} from '../../Redux/Employee/actions'
class EmployeePage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    UNSAFE_componentWillMount() {
        this.props.fetchEmployee()
    }
    render() {
        let data
        if(this.props.Employee){
            data = this.props.Employee
        }

        return (
            <div>
                {data !== undefined ?  <EmployeeList EmployeeList ={data}/> : '' }
            </div>
        )
    }
}
EmployeePage.propTypes = {
    Employee: PropTypes.array.isRequired,
    fetchEmployee: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {Employee: state.Employee}
}

export default connect(mapStateToProps, {fetchEmployee})(EmployeePage)