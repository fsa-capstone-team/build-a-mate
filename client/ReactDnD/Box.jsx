import React from 'react'
const styles = {
  border: '0px dashed gray',
  padding: '0rem 0.rem',
  cursor: 'move'
}
const Box = ({title, pink}) => {
  const backgroundColor = pink ? 'pink' : 'white'
  return <div style={{...styles, backgroundColor}}>{title}</div>
}
export default Box
