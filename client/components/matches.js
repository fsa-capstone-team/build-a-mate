import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Profile} from '../components'
import * as faceapi from 'face-api.js'
import {getMatches} from '../store'

class Matches extends Component {
  constructor() {
    super()
    this.state = {
      myImage: null,
      myFaceDesc: null,
      distance: null
    }
  }

  componentDidMount() {
    // await faceapi.loadFaceRecognitionModel('/models')
    // const image = await faceapi.fetchImage(this.props.bwPhoto)
    // this.setState({
    //   myImage: image
    // })
    this.props.getMatches(
      this.props.id,
      this.props.gender,
      this.props.genderPreference,
      this.props.createdFace
    )
  }

  async computeFaceDescriptor(image) {
    const faceDesc = await faceapi.computeFaceDescriptor(image)
    this.setState({
      myFaceDesc: faceDesc
    })
  }

  async computeEuclideanDistance(faceDesc1, faceDesc2) {
    const eucDist = await faceapi.round(
      faceapi.euclideanDistance(faceDesc1, faceDesc2)
    )
    this.setState({
      distance: eucDist
    })
  }

  render() {
    console.log(this.state)
    return <div>Euclidean Distance: {this.state.distance}</div>
  }
}

const mapStateToProps = function(state) {
  return {
    id: state.user.id,
    gender: state.user.gender,
    genderPreference: state.user.genderPreference,
    createdFace: state.user.createdFace
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getMatches(id, gender, genderPreference, createdFace) {
      dispatch(getMatches(id, gender, genderPreference, createdFace))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)
