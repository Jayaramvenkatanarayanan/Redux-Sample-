import React, { Component } from 'react'
import PropTypes from 'prop-types';

class GamesList extends Component {
  constructor(props){
      super(props)
  }
    render() {
        const emptyMessage = ( <p>There is no Games Collection</p>)
        const GamesList = ( <p>GamesList</p>)
        return (
            <div>
            {this.props.gamesList  ? GamesList : emptyMessage}
            </div>
        );
    }
}

GamesList.propTypes={
    gamesList: PropTypes.array.isRequired
}


export default GamesList;

