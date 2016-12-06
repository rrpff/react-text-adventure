import 'whatwg-fetch'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './containers/App'
import store from './store'

const root = document.getElementById('content')
const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(application, root)
