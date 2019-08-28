import React, {Component} from 'react'
import {connect} from 'react-redux'
import FaceFeatures from './face-features'
import FaceCanvas from './face-canvas'
import CustomDragLayer from './custom-drag-layer'
import Box from '@material-ui/core/Box'
import {Button} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import html2canvas from 'html2canvas'
import {addFaceDesc} from '../store'
import grayscale from 'image-filter-grayscale'
import imageFilterCore from 'image-filter-core'
import history from '../history'

class CreateFace extends Component {
  handleScreenShot = async () => {
    const body = document.querySelector('#faceCanvas')
    console.log('BODY:', body)
    const createdFaceImg = new Image()
    html2canvas(body).then(canvas => {
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')

      croppedCanvas.width = 150
      croppedCanvas.height = 150

      croppedCanvasContext.drawImage(canvas, 0, 0, 802, 802, 0, 0, 130, 130)
      const imgData = croppedCanvasContext.getImageData(0, 0, 130, 130)

      grayscale(imgData, 4).then(function(result) {
        const src = imageFilterCore.convertImageDataToCanvasURL(result)
        console.log('CANVASURL:', src)
        createdFaceImg.src = src
      })
    })
    console.log('HISTORY:', history)
    await this.props.addFaceDesc(createdFaceImg, 'createdFaceDesc')
    console.log('HISTORY2:', this.props.history)
    history.push('/matches')
  }

  render() {
    const {template, currentFeatures} = this.props

    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        style={{marginTop: '5%'}}
      >
        <FaceFeatures />
        <div id="faceCanvas">
          <div>
            <FaceCanvas template={template} currentFeatures={currentFeatures} />
            <CustomDragLayer />
          </div>
          <Box display="flex" justifyContent="flex-end">
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
          </Box>
        </div>
      </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateFace)
