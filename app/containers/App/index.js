import React from 'react'
import { connect } from 'react-redux'
import { startGame, setCurrentRoom } from '../../actions/game'

@connect(state => ({ game: state.game }))
export default class App extends React.Component {
  initialise () {
    this.props.dispatch(startGame())
    this.props.dispatch(setCurrentRoom(1))
  }

  isNotStarted () {
    return !this.props.game.started
  }

  render () {
    return (
      <section>
        <ul>
          {this.props.game.messages.map(message =>
            <li>{message}</li>
          )}
        </ul>

        {this.isNotStarted() && <button onClick={::this.initialise}>start</button>}
      </section>
    )
  }
}
