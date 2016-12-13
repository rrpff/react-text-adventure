import React from 'react'
import { connect } from 'react-redux'
import { startGame, setCurrentRoom, execute } from '../../actions/game'

@connect(state => ({ game: state.game }))
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  initialise () {
    this.props.dispatch(startGame())
    this.props.dispatch(setCurrentRoom(1))
  }

  isStarted () {
    return this.props.game.started
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  handleKeyPress (e) {
    if (e.which === 13) {
      this.props.dispatch(execute(this.state.value))
      this.setState({ value: '' })
    }
  }

  render () {
    return (
      <section>
        <ul>
          {this.props.game.messages.map(message =>
            <li>{message}</li>
          )}
        </ul>

        {this.isStarted()
          ? <input type="text" onChange={::this.handleChange} onKeyPress={::this.handleKeyPress} value={this.state.value} />
          : <button onClick={::this.initialise}>start</button>
        }
      </section>
    )
  }
}
