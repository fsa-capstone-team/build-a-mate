import React from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'
import ItemTypes from './ItemTypes'

function getStyles(props) {
  const {left, top, isDragging} = props
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  }
}
class FaceFeature extends React.PureComponent {
  componentDidMount() {
    const {connectDragPreview} = this.props
    if (connectDragPreview) {
      // Use empty image as a drag preview so browsers don't draw it
      // and we can draw whatever we want on the custom drag layer instead.
      connectDragPreview(getEmptyImage(), {
        // IE fallback: specify that we'd rather screenshot the node
        // when it already knows it's being dragged so we can hide it with CSS.
        captureDraggingState: true
      })
    }
  }
  render() {
    const {feature, image, connectDragSource} = this.props
    console.log(feature)
    return connectDragSource(
      <div style={getStyles(this.props)}>
        {feature === 'eyebrow' || feature === 'eye' ? (
          <img src={image} />
        ) : (
          <img src={image} />
        )}
      </div>
    )
  }
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag(props) {
      const {id, image, left, top} = props
      return {id, image, left, top}
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(FaceFeature)
