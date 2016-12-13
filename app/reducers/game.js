const INITIAL_STATE = {
  started: false,
  currentRoom: null,
  inventory: [

  ],
  messages: [
    'Text Adventure'
  ],
  rooms: {
    1: {
      arrivalText: 'You are in a cave.',
      commands: {
        look (dispatch) {
          dispatch({ type: 'PRINT_MESSAGE', message: 'It is a dark cave. You can see light to the north.' })
        },
        'go north': function (dispatch) {
          dispatch({ type: 'SET_CURRENT_ROOM', roomId: 2 })
        },
        'use matches': function (dispatch, state) {
          if (!state.inventory.includes('matches')) return

          dispatch({ type: 'REMOVE_INVENTORY', item: 'matches' })
          dispatch({ type: 'PRINT_MESSAGE', message: 'You have created fire. Well done. Game over.' })
        }
      }
    },
    2: {
      arrivalText: 'You are outside the cave.',
      commands: {
        look (dispatch) {
          dispatch({ type: 'PRINT_MESSAGE', message: 'It\'s a nice day. There are some matches on the floor. The cave is to the south' })
        },
        'pick up matches': function (dispatch) {
          dispatch({ type: 'PRINT_MESSAGE', message: 'You got the matches.' })
          dispatch({ type: 'ADD_ITEM', item: 'matches' })
        },
        'go south': function (dispatch) {
          dispatch({ type: 'SET_CURRENT_ROOM', roomId: 1 })
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
    case 'PRINT_MESSAGE': {
      return { ...state, messages: [...state.messages, action.message] }
    }
    case 'ADD_ITEM': {
      return { ...state, inventory: [...state.inventory, action.item] }
    }
    default: {
      return state
    }
  }
}
