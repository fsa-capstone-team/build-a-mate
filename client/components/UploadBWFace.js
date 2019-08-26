import React, {Component} from 'react'
import {connect} from 'react-redux'
import Webcam from 'react-webcam'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {}
    this.capture = this.capture.bind(this)
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture() {
    var img = new Image()
    const imageSrc = this.webcam.getScreenshot()
    img.src = imageSrc
    this.props.setParentState('bwFaceImg', img)
  }

  render() {
    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: 'user'
    }

    const {bwFaceImg} = this.props

    return (
      <div>
        <h1>Upload Face</h1>

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
          {bwFaceImg && <img src={bwFaceImg.src} />}
        </Box>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  id: state.user.id
})

export default connect(mapStateToProps)(UploadBWFace)
