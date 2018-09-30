import React, { Component } from 'react'
import { connect} from 'react-redux'
import PropTypes from 'prop-types';
import GamesList from './GamesList'
import {fetchGames} from './Actions/GamePage'
 class GamesPage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchGames()
    }
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
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.game
    }
}


export default connect(mapStateToProps,{fetchGames})(GamesPage)