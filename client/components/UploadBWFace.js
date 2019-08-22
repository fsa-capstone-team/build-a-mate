import React, {Component} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Selfie from './selfie'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.capture = this.capture.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
    console.log(this.state.file)
    const index = this.state.file.src.indexOf(',')
    const data = this.state.file.src.slice(index + 1)
    console.log('DATA:', data)
    await axios.post('api/imgur/uploadbwface', data)
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture() {
    var img = new Image()
    const imageSrc = this.webcam.getScreenshot()
    img.src = imageSrc
    this.setState({file: img})
  }

  render() {
    if (this.state.file) {
      console.log(this.state.file)
      console.log(this.state.file.src)
    }
    console.log(this.state)

    const videoConstraints = {
      width: 150,
      height: 150,
      facingMode: 'user'
    }

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
          <div>
            {this.state.file && (
              <Selfie img={this.state.file.src} onSubmit={this.handleSubmit} />
            )}
          </div>
          {/* <input type="file" id="bw-face" name="img" accept="image/png" />
          <input type="submit" value="Upload Image" name="submit" /> */}
        </Box>
      </div>
    )
  }
}

export default UploadBWFace
