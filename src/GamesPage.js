import React, { Component } from 'react'
import { connect} from 'react-redux'
import PropTypes from 'prop-types';
import GamesList from './GamesList'
 class GamesPage extends Component {
    render() {
        return (
            <div>
                <p>This is Game Page</p>
                <GamesList gamesList ={this.props.games}/>
            </div>
        )
    }
}
GamesPage.propTypes={
    games: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.game
    }
}


export default connect(mapStateToProps)(GamesPage)