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

export function execute (command) {
  return {
    type: 'EXECUTE_COMMAND',
    command
  }
}
