import React, {Component} from 'react'
import GamesPage from './GamesPage'
import { Route, Link} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Link to='/gamesPage'>Games</Link>
        < div >
            <Route  path='/gamesPage' component={GamesPage}></Route>
        </div>
      </div>
    )
  }
}