import React, {Component} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
require('../../secrets')

class UploadBWFace extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    //const img = e.target.img.files[0].name
    const file = e.target.img.files[0]

    await axios.post('api/imgur/uploadbwface', file)
    this.setState({file})
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    var image = new Image()
    const imageSrc = this.webcam.getScreenshot()
    image.src = imageSrc
    this.setState({file: image})
  }

  render() {
    console.log(this.state)
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    }
    return (
      <div>
        {/* <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={350}
          videoConstraints={videoConstraints}
        /> */}
        <h1>Upload Face</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <button type="submit" onClick={this.capture}>
            Capture photo
          </button>
          <input type="submit" value="Upload Image" name="submit" /> */}
          <input type="file" id="bw-face" name="img" accept="image/png" />
          <input type="submit" value="Upload Image" name="submit" />
        </form>
      </div>
    )
  }
}

export default UploadBWFace
