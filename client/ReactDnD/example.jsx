import React, {useState, useCallback} from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'
const DragAroundCustomDragLayer = () => {
  return (
    <div>
      <Container />
      <CustomDragLayer />
    </div>
  )
}
export default DragAroundCustomDragLayer
