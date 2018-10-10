import React, {Component} from 'react'
import EmployeePage from '../StateComponents/EmployeePage'
import {Route, Link} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Link to='/employee'>Employee List
        </Link>
        < div >
          <Route path='/employee' component={EmployeePage}></Route>
        </div>
      </div>
    )
  }
}