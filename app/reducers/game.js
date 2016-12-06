const INITIAL_STATE = {
  started: false,
  currentRoom: null,
  messages: [
    'Text Adventure'
  ],
  rooms: {
    1: {
      arrivalText: 'You are in a cave.',
      commands: {
        'look' (store) {
          store.dispatch({ type: 'PRINT_MESSAGE', text: 'It is a dark cave. You can see light to the north.' })
        },
        'go north' (store) {
          store.dispatch({ type: 'SET_CURRENT_ROOM', roomId: 2 })
        },
        'use matches' (store) {
          const items = store.getState().game.items
          if (!items.includes('matches')) return false

          store.dispatch({ type: 'REMOVE_INVENTORY', item: 'matches' })
          store.dispatch({ type: 'PRINT_MESSAGE', text: 'You have created fire. Well done. Game over.' })
        }
      }
    },
    2: {
      arrivalText: 'You are outside the cave.',
      commands: {
        'look' (store) {
          store.dispatch({ type: 'PRINT_MESSAGE', text: 'It\'s a nice day. There are some matches on the floor. The cave is to the south' })
        },
        'pick up matches' (store) {
          store.dispatch({ type: 'PRINT_MESSAGE', text: 'You got the matches.' })
          store.dispatch({ type: 'ADD_ITEM', item: 'matches' })
        },
        'go south' (store) {
          store.dispatch({ type: 'SET_CURRENT_ROOM', roomId: 1 })
        }
      }
    }
  }
}

export default function game (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'START_GAME': {
      return { ...state, started: true }
    }
    case 'SET_CURRENT_ROOM': {
      const room = state.rooms[action.roomId]

      return {
        ...state,
        currentRoomId: action.roomId,
        messages: [...state.messages, room.arrivalText]
      }
    }
    default: {
      return state
    }
  }
}
