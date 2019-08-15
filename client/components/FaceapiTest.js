import React, {Component} from 'react'
import * as faceapi from 'face-api.js'

class FaceapiTest extends Component {
  constructor() {
    super()
    this.state = {
      input: null
    }
  }

  async componentDidMount() {
    const input = await faceapi.fetchImage('/image/test-face.png')
    this.setState({input})
  }

  render() {
    console.log('I am here')
    console.log(faceapi.fetchImage)
    console.log(faceapi.computeFaceDescriptor)
    console.log(faceapi.euclideanDistance)
    console.log(this.state.input)
    //run functions here
    //when results ready
    //change state for re render

    return (
      <div>
        <h1>Face-api Test Page</h1>
        <h2 />
      </div>
    )
  }
}

export default FaceapiTest
