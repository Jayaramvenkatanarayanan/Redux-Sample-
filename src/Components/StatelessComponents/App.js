import React, {Component} from 'react'
import EmployeePage from '../StateComponents/EmployeePage'
import {Route, Link} from "react-router-dom";
import {Menu} from 'semantic-ui-react'
export default class App extends Component {
  state = {}
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item >
            Editorials
          </Menu.Item>

          <Menu.Item>
            Reviews
          </Menu.Item>

          <Menu.Item >
            Upcoming Events
          </Menu.Item>
        </Menu>
        <Link to='/employee'>Employee List
        </Link>
        < div >
          <Route path='/employee' component={EmployeePage}></Route>
        </div>
      </div>
    )
  }
}