import React, {Component} from 'react'
import * as faceapi from 'face-api.js'

class FaceapiTest extends Component {
  constructor() {
    super()
    this.state = {
      input1: null,
      input2: null
    }
  }

  async componentDidMount() {
    const input1 = await faceapi.fetchImage('/image/test-face.png')
    const input2 = await faceapi.fetchImage('/image/test-face2.png')
    this.setState({input1, input2})
  }

  render() {
    console.log('I am here')
    console.log(faceapi.fetchImage)
    console.log(faceapi.computeFaceDescriptor)
    console.log(faceapi.euclideanDistance)
    console.log(this.state)
    //run functions here
    //when results ready
    //change state for re render

    return (
      <div>
        <h1>Face-api Test Page</h1>
      </div>
    )
  }
}

export default FaceapiTest
