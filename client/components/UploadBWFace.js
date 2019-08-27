import React, {Component} from 'react'
import {connect} from 'react-redux'
import Selfie from './selfie'
import Webcam from 'react-webcam'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {addFaceDesc} from '../store'
//import history from '../history'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      //file: null,
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
    console.log('CHECK HERE:', this.state.bwFaceImg)
    await this.props.addFaceDesc(this.state.bwFaceImg, 'bwFaceDesc')
    this.props.step()
  }

  handleStepBack = () => {
    this.props.stepBack()
  }

  render() {
    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: 'user'
    }

    return (
      <div>
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
            height={150}
            ref={this.setRef}
            screenshotFormat="image/png"
            width={150}
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
            {this.state.bwFaceImg && <Selfie img={this.state.bwFaceImg.src} />}
          </div>
        </Box>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addFaceDesc: (base64, type) => dispatch(addFaceDesc(base64, type))
})

export default connect(null, mapDispatchToProps)(UploadBWFace)
