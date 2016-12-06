{
  game: {
    started: true,
    messages: [
      'You are in a cave'
    ],
    items: [],
    currentRoom: 1,
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
}
