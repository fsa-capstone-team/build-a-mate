import React, {useCallback, useState} from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import DraggableBox from './DraggableBox'
import doSnapToGrid from './snapToGrid'
import update from 'immutability-helper'
const styles = {
  width: '100%',
  height: 810,
  border: '1px solid black',
  position: 'relative'
}
function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item} />
}
const eyes = (
  <img src="http://www.clipartroo.com/images/6/angry-eyes-clipart-6896.png" />
)
const nose = (
  <img
    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/nose-1585293-1345618.png"
  />
)
const mouth = (
  <img
    src="http://icons.iconarchive.com/icons/kevin-thompson/love-and-breakup/256/mouth-lips-icon.png"
  />
)

const Container = ({snapToGrid}) => {
  const [boxes, setBoxes] = useState({
    a: {top: 20, left: 80, title: 'Drag me around'},
    b: {top: 180, left: 20, title: 'Drag me too'},
    c: {top: 0, left: 0, title: eyes},
    d: {top: 0, left: 0, title: nose},
    e: {top: 0, left: 0, title: mouth}
  })
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: {left, top}
          }
        })
      )
    },
    [boxes]
  )
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      let left = Math.round(item.left + delta.x)
      let top = Math.round(item.top + delta.y)
      if (snapToGrid) {
        ;[left, top] = doSnapToGrid(left, top)
      }
      moveBox(item.id, left, top)
      return undefined
    }
  })
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
    </div>
  )
}
export default Container
