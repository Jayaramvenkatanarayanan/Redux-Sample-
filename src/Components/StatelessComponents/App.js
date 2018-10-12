import React, {Component} from 'react'
import {Route, NavLink} from "react-router-dom";
import './app.css'
import Home from './Home'
import EmployeePage from '../StateComponents/EmployeePage'
import NewEmployee from '../StateComponents/NewEmployee'
export default class App extends Component {
  state = {}
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  render() {
    return (
      <div>
        <div className='Page'>
          <div className="ui secondary pointing menu">
            <NavLink exact to="/" className='item' activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/employee" className='item' activeClassName="active">
              Employee List
            </NavLink>
            <NavLink exact to="/Newemployee" className='item' activeClassName="active">
              Add New Employee
            </NavLink>
            <a className="item">
              Department
            </a>
            <div className="right menu">
              <a className="ui item">
                Sign in
              </a>
              <a className="ui item">
                Login
              </a>
            </div>
          </div>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/employee" component={EmployeePage}/>
        <Route path="/Newemployee" component={NewEmployee}/>
      </div>
    )
  }
}