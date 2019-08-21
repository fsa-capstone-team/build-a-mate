import React from 'react'
import {DropTarget} from 'react-dnd'
import ItemTypes from './ItemTypes'
import FaceFeature from './face-feature'
import snapToGrid from './snapToGrid'
// @ts-ignore
import update from 'immutability-helper'

class FaceCanvas extends React.PureComponent {
  constructor(props) {
    super(...arguments)
    this.state = {
      features: {
        eyebrow: {
          top: 0,
          left: 0,
          image: props.currentFeatures.eyebrow.image
        },
        eye: {
          top: 0,
          left: 0,
          image: props.currentFeatures.eye.image
        },
        nose: {
          top: 0,
          left: 0,
          image: props.currentFeatures.nose.image
        },
        mouth: {
          top: 0,
          left: 0,
          image: props.currentFeatures.mouth.image
        }
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.currentFeatures.eyebrow !== prevProps.currentFeatures.eyebrow
    ) {
      this.setState(prevState => ({
        ...prevState,
        features: {
          ...prevState.features,
          eyebrow: {
            ...prevState.features.eyebrow,
            image: this.props.currentFeatures.eyebrow.image
          }
        }
      }))
    } else if (
      this.props.currentFeatures.eye !== prevProps.currentFeatures.eye
    ) {
      this.setState(prevState => ({
        ...prevState,
        features: {
          ...prevState.features,
          eye: {
            ...prevState.features.eye,
            image: this.props.currentFeatures.eye.image
          }
        }
      }))
    } else if (
      this.props.currentFeatures.nose !== prevProps.currentFeatures.nose
    ) {
      this.setState(prevState => ({
        ...prevState,
        features: {
          ...prevState.features,
          nose: {
            ...prevState.features.nose,
            image: this.props.currentFeatures.nose.image
          }
        }
      }))
    } else if (
      this.props.currentFeatures.mouth !== prevProps.currentFeatures.mouth
    ) {
      this.setState(prevState => ({
        ...prevState,
        features: {
          ...prevState.features,
          mouth: {
            ...prevState.features.mouth,
            image: this.props.currentFeatures.mouth.image
          }
        }
      }))
    }
  }
  moveBox(id, left, top) {
    this.setState(
      update(this.state, {
        features: {
          [id]: {
            $merge: {left, top}
          }
        }
      })
    )
  }
  renderBox(item, key) {
    return <FaceFeature key={key} id={key} {...item} />
  }
  render() {
    console.log(this.state.features)
    const {connectDropTarget, template} = this.props
    const {features} = this.state

    const styles = {
      width: 800,
      height: 800,
      border: '1px solid black',
      position: 'relative',
      backgroundImage: `url(${template})`
    }
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(features).map(key => this.renderBox(features[key], key))}
      </div>
    )
  }
}

export default DropTarget(
  ItemTypes.BOX,
  {
    drop(props, monitor, component) {
      if (!component) {
        return
      }
      const delta = monitor.getDifferenceFromInitialOffset()
      const item = monitor.getItem()
      let left = Math.round(item.left + delta.x)
      let top = Math.round(item.top + delta.y)
      if (props.snapToGrid) {
        ;[left, top] = snapToGrid(left, top)
      }
      component.moveBox(item.id, left, top)
    }
  },
  connect => ({
    connectDropTarget: connect.dropTarget()
  })
)(FaceCanvas)
