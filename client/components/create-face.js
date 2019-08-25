import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import FaceFeatures from './face-features'
import FaceCanvas from './face-canvas'
import CustomDragLayer from './custom-drag-layer'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core'
import html2canvas from 'html2canvas'
import {saveCreatedFace} from '../store'

const styles = () => ({
  features: {
    margin: '2%'
  },
  canvas: {
    marginTop: '2%',
    marginRight: '2%',
    marginBottom: '2%'
  }
})

class CreateFace extends Component {
  handleScreenShot = () => {
    const body = document.querySelector('body')
    console.log(body)
    html2canvas(body).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')

      croppedCanvas.width = 800
      croppedCanvas.height = 800

      croppedCanvasContext.drawImage(canvas, 0, 0, 800, 800, 0, 0, 800, 800)
      const data = croppedCanvas //.toDataURL().split(',')[1]
      console.log('CROPPED:', data)
      console.log(this.props.id)
      this.props.saveCreatedFace(this.props.id, data)
    })
  }

  render() {
    const {classes, template, currentFeatures} = this.props

    return (
      <Grid container>
        <Grid item xs={5} className={classes.features}>
          <FaceFeatures />
        </Grid>
        <Grid item xs={6} className={classes.canvas}>
          <div id="faceCanvas">
            <FaceCanvas template={template} currentFeatures={currentFeatures} />
            <CustomDragLayer />
          </div>
          <div>
            <Button onClick={this.handleScreenShot}>Submit</Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  id: state.user.id,
  template: state.currentTemplate,
  currentFeatures: state.currentFeatures
})

const mapDispatchToProps = dispatch => ({
  saveCreatedFace: (id, obj) => dispatch(saveCreatedFace(id, obj))
})

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CreateFace)
)
