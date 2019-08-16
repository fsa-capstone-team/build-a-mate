import React, {Component} from 'react'
import * as faceapi from 'face-api.js'

class FaceapiTest extends Component {
  constructor() {
    super()
    this.state = {
      input1: null,
      input2: null,
      distance: 1
    }
  }

  computeFaceDescriptor = async () => {
    await faceapi.loadFaceRecognitionModel('/models')
    console.log('1')
    const desc1 = await faceapi.computeFaceDescriptor(this.state.input1)
    console.log('2')
    const desc2 = await faceapi.computeFaceDescriptor(this.state.input2)
    console.log('3')
    const distance = faceapi.round(faceapi.euclideanDistance(desc1, desc2))
    this.setState({distance})
  }

  async componentDidMount() {
    // await faceapi.loadFaceRecognitionModel('/models')
    const input1 = await faceapi.fetchImage(
      'https://build-a-mate.s3.amazonaws.com/test-face.png'
    )
    const input2 = await faceapi.fetchImage(
      'https://build-a-mate.s3.amazonaws.com/test-face2.png'
    )
    // const desc1 = await faceapi.computeFaceDescriptor(input1)
    // const desc2 = await faceapi.computeFaceDescriptor(input2)
    // this.setState({input1, input2, desc1, desc2})
    // const distance = await faceapi.euclideanDistance(desc1, desc2)
    // console.log(distance)
    this.setState({input1, input2})
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <h1>Face-api Test Page</h1>
        <button onClick={this.computeFaceDescriptor}>Compute Face</button>
        <h2>Result: {this.state.distance}</h2>
      </div>
    )
  }
}

export default FaceapiTest