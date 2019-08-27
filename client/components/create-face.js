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
import grayscale from 'image-filter-grayscale'
import imageFilterCore from 'image-filter-core'
import history from '../history'
import {withRouter} from 'react-router-dom'

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
  constructor() {
    super()
    this.state = {
      createdFaceImg: ''
    }
  }

  handleScreenShot = async () => {
    const body = document.querySelector('#faceCanvas')
    console.log('BODY:', body)
    const createdFaceImg = new Image()
    html2canvas(body).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')

      croppedCanvas.width = 150
      croppedCanvas.height = 150

      croppedCanvasContext.drawImage(canvas, 0, 0, 802, 802, 25, 25, 130, 130)
      const imgData = croppedCanvasContext.getImageData(0, 0, 130, 130)

      grayscale(imgData, 4).then(function(result) {
        const src = imageFilterCore.convertImageDataToCanvasURL(result)
        console.log('CANVASURL:', src)
        createdFaceImg.src = src
      })

      this.setState({createdFaceImg})
    })
    console.log('HISTORY:', history)
    await this.props.addFaceDesc(createdFaceImg, 'createdFaceDesc')
    console.log('HISTORY2:', this.props.history)
    history.push('/matches')
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
                Submit Face
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
  template: state.currentTemplate,
  currentFeatures: state.currentFeatures
})

const mapDispatchToProps = dispatch => ({
  addFaceDesc: (createdFaceImg, type) =>
    dispatch(addFaceDesc(createdFaceImg, type))
})

// export default withRouter(withStyles(styles)(
//   connect(mapStateToProps, mapDispatchToProps)(CreateFace)))

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CreateFace)
)
