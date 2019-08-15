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
    await faceapi.loadFaceRecognitionModel('/models')
    const input1 = await faceapi.fetchImage('/image/test-face.png')
    const input2 = await faceapi.fetchImage('/image/test-face2.png')
    const desc1 = await faceapi.computeFaceDescriptor(input1)
    const desc2 = await faceapi.computeFaceDescriptor(input2)
    this.setState({input1, input2, desc1, desc2})
    const distance = await faceapi.euclideanDistance(desc1, desc2)
    console.log(distance)
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
