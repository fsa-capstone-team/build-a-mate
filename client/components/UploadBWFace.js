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
      bwFaceImg: {src: '/image/selfie-placeholder.png'}
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
      width: 350,
      height: 350,
      facingMode: 'user'
    }

    return (
      <div style={{marginTop: '5%'}}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <h2 style={{margin: '-2%'}}>
            Please center your face in the webcam.
          </h2>
          <h4>
            This picture will only be used for our matching algorithm and will
            not be visible to others.
          </h4>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box display="flex" flexDirection="column" marginRight="3%">
            <Box display="flex" margin="2%">
              <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={this.setRef}
                screenshotFormat="image/png"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" margin="2%">
              <Button
                variant="contained"
                color="primary"
                name="previous"
                style={{height: 40}}
                onClick={this.handleStepBack}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                type="submit"
                style={{height: 40}}
                onClick={this.capture}
              >
                Capture photo
                <PhotoCamera />
              </Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" marginLeft="3%">
            <Box display="flex" margin="2%">
              {this.state.bwFaceImg && (
                <img src={this.state.bwFaceImg.src} width={350} height={350} />
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end" margin="2%">
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{height: 40}}
                onClick={this.handleSubmit}
                disabled={
                  this.state.bwFaceImg.src === '/image/selfie-placeholder.png'
                }
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addFaceDesc: (base64, type) => dispatch(addFaceDesc(base64, type))
})

export default connect(null, mapDispatchToProps)(UploadBWFace)
