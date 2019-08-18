import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function MakeFace() {
  return (
    <div className="MakeFace">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('app')
ReactDOM.render(<MakeFace />, rootElement)
