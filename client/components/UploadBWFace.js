import React, {Component} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import Img from 'react-image'

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
    await axios.post('api/imgur/uploadbwface', this.state.file)
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
        <Webcam
          audio={false}
          height={600}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={600}
          videoConstraints={videoConstraints}
        />
        <h1>Upload Face</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onClick={this.capture}>
            Capture photo
          </button>
          <div>
            {this.state.file && <Img src={this.state.file.src} />}
            <input type="submit" value="Upload Image" name="submit" />
          </div>
          {/* <input type="file" id="bw-face" name="img" accept="image/png" />
          <input type="submit" value="Upload Image" name="submit" /> */}
        </form>
      </div>
    )
  }
}

export default UploadBWFace
