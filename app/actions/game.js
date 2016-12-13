export function startGame () {
  return {
    type: 'START_GAME'
  }
}

export function setCurrentRoom (roomId) {
  return {
    type: 'SET_CURRENT_ROOM',
    roomId
  }
}

export function printMessage (message) {
  return {
    type: 'PRINT_MESSAGE',
    message
  }
}

export function execute (command) {
  return function (dispatch, getState) {
    const state = getState().game
    const room = state.rooms[state.currentRoomId]
    const commandHandler = room.commands[command]

    if (commandHandler) {
      commandHandler(dispatch, state)
    } else {
      dispatch(printMessage('I don\'t know how to do that.'))
    }
  }
}
