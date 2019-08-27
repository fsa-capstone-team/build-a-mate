import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import FaceFeatures from './face-features'
import FaceCanvas from './face-canvas'
import CustomDragLayer from './custom-drag-layer'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import html2canvas from 'html2canvas'
import {addFaceDesc} from '../store'

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
    const body = document.querySelector('#faceCanvas')
    console.log(body)
    html2canvas(body).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')

      croppedCanvas.width = 150
      croppedCanvas.height = 150
      let disWidth = 0.17 * croppedCanvas.width
      let disHeight = 0.17 * croppedCanvas.height

      croppedCanvasContext.drawImage(
        canvas,
        0,
        0,
        802,
        802,
        disWidth,
        disHeight,
        130,
        130
      )
      const img = croppedCanvas.toDataURL().split(',')[1]
      console.log('CROPPED:', img)
      console.log(this.props.id)
      this.props.setParentState('createdFaceImg', img)
      // this.props.addFaceDesc(this.props.id, img, 'createdFaceDesc')
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
            <div>
              <FaceCanvas
                template={template}
                currentFeatures={currentFeatures}
              />
              <CustomDragLayer />
            </div>

            <div>
              <Button
                variant="contained"
                size="small"
                color="primary"
                type="submit"
                onClick={this.handleScreenShot}
              >
                Capture Face
                <PhotoCamera />
              </Button>
            </div>
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
  addFaceDesc: (userId, img, type) => dispatch(addFaceDesc(userId, img, type))
})

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CreateFace)
)
