import React, {Component} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'

export default class Selfie extends Component {
  constructor() {
    super()
    this.state = {
      file: null
    }
  }

  async submitFile() {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', this.state.file[0])
    try {
      await axios.post(`/test-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.setState({file: imageSrc})
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    }

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <form onSubmit={this.submitFile}>
          <button type="submit" onClick={this.capture}>
            Capture photo
          </button>
        </form>
      </div>
    )
  }
}
