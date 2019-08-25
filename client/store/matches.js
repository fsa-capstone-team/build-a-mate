import axios from 'axios'
import * as faceapi from 'face-api.js'

// ACTION TYPES
const GET_MATCHES = 'GET_MATCHES'

// ACTION CREATORS
const gotMatches = matches => ({type: GET_MATCHES, matches})

// THUNK CREATORS
export const getMatches = (
  id,
  gender,
  genderPreference,
  createdFace
) => async dispatch => {
  try {
    // const res = await axios.post('/api/users/matches', {
    //   id,
    //   loadFaceRecognitionModel: faceapi.loadFaceRecognitionModel,
    //   fetchImage: faceapi.fetchImage,
    //   computeFaceDescriptor: faceapi.computeFaceDescriptor,
    //   euclideanDistance: faceapi.euclideanDistance
    // })
    console.time('total')
    console.time('axios')
    const {data} = await axios.post('/api/users/matches', {
      id,
      gender,
      genderPreference
    })
    console.timeEnd('axios')
    console.time('load Model')
    await faceapi.loadFaceRecognitionModel('/models')
    console.timeEnd('load Model')
    console.time('fetchImage')
    console.log(createdFace)
    const createdFaceImage = await faceapi.fetchImage(createdFace)
    //console.log(createdFaceImage)
    console.timeEnd('fetchImage')
    console.time('compute')
    const createdFaceDescriptor = await faceapi.computeFaceDescriptor(
      createdFaceImage
    )
    console.timeEnd('compute')
    console.time('map')
    let users = await Promise.all(
      data.map(async user => {
        const bwPhotoImage = await faceapi.fetchImage(user.bwPhoto)
        const userBWPhotoDescriptor = await faceapi.computeFaceDescriptor(
          bwPhotoImage
        )
        const euclideanDistance = await faceapi.euclideanDistance(
          createdFaceDescriptor,
          userBWPhotoDescriptor
        )
        return {...user, euclideanDistance}
      })
    )
    console.timeEnd('map')
    console.time('sort')
    const matches = users
      .sort((a, b) => a.euclideanDistance - b.euclideanDistance)
      .slice(0, 5)
    console.timeEnd('sort')
    console.timeEnd('total')
    dispatch(gotMatches(matches))
  } catch (err) {
    console.error(err)
  }
}

const initialState = []

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches
    default:
      return state
  }
}
