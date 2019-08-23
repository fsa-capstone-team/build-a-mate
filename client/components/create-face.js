import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import FaceFeatures from './face-features'
import FaceCanvas from './face-canvas'
import CustomDragLayer from './custom-drag-layer'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core'
import html2canvas from 'html2canvas'

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
    const body = document.getElementById('faceCanvas')

    html2canvas(body).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')

      croppedCanvas.width = 800
      croppedCanvas.height = 800

      croppedCanvasContext.drawImage(canvas, 150, 150, 800, 800, 0, 0, 800, 800)
      console.log('CROPPED:', croppedCanvas.toDataURL())
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
          <div>
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

const mapStateToProps = function(state) {
  return {
    template: state.currentTemplate,
    currentFeatures: state.currentFeatures
  }
}

export default withStyles(styles)(connect(mapStateToProps)(CreateFace))
