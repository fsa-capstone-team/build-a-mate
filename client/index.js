import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// establishes socket connection
import './socket'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </DndProvider>,
  document.getElementById('app')
)
