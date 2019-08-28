import React, {Component} from 'react'
import {connect} from 'react-redux'
import Webcam from 'react-webcam'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {addFaceDesc} from '../store'
import resizebase64 from 'resize-base64'
import grayscale from 'image-filter-grayscale'
import imageFilterCore from 'image-filter-core'
//import history from '../history'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      bwFaceImg: ''
    }
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    var bwFaceImg = new Image()
    const src = this.webcam.getScreenshot()
    bwFaceImg.src = src
    this.setState({bwFaceImg})
  }

  handleSubmit = async () => {
    console.log('CHECK HERE:', this.state.bwFaceImg.src)
    // var bwImg = new Image()
    var resizeImg = new Image()
    //resize
    var resizeImgSrc = resizebase64(this.state.bwFaceImg.src, 150, 150)
    resizeImg.src = resizeImgSrc
    console.log('RESIZED:', resizeImg.src)
    //grayscale
    // // bwImg.src = resizeImg
    // let bwFace = document.getElementById('#bwFace')

    // let newCanvas = document.createElement('canvas')
    // let canvasCtx = newCanvas.getContext('2d')

    // canvasCtx.drawImage(resizeImg, 150, 150)
    // const imgData = canvasCtx.getImageData(0, 0, 150, 150)
    // grayscale(imgData, 4).then(function(result) {
    //   const src = imageFilterCore.convertImageDataToCanvasURL(result)
    //   console.log('BWIMG:', src)
    //   bwImg.src = src
    // })
    await this.props.addFaceDesc(resizeImg, 'bwFaceDesc')
    this.props.step()
  }

  handleStepBack = () => {
    this.props.stepBack()
  }

  render() {
    const videoConstraints = {
      width: 450,
      height: 450,
      facingMode: 'user'
    }

    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>Upload Face</h1>
        <Button
          variant="contained"
          color="primary"
          name="previous"
          onClick={this.handleStepBack}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={this.handleSubmit}
        >
          Submit photo
        </Button>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          color="text.primary"
        >
          <Webcam
            audio={false}
            height={450}
            ref={this.setRef}
            screenshotFormat="image/png"
            width={450}
            videoConstraints={videoConstraints}
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            type="submit"
            onClick={this.capture}
          >
            Capture photo
            <PhotoCamera />
          </Button>
          <div>
            {this.state.bwFaceImg && <img src={this.state.bwFaceImg.src} />}
          </div>
        </Box>
      </Box>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addFaceDesc: (base64, type) => dispatch(addFaceDesc(base64, type))
})

export default connect(null, mapDispatchToProps)(UploadBWFace)
