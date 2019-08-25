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
  createdFaceDesc
) => async dispatch => {
  try {
    const {data} = await axios.post('/api/users/matches', {
      id,
      gender,
      genderPreference
    })
    const parsedCreatedFaceDesc = await new Float32Array(
      JSON.parse(createdFaceDesc)
    )
    let users = await Promise.all(
      data.map(async user => {
        const parsedBwFaceDesc = await new Float32Array(
          JSON.parse(user.bwFaceDesc)
        )
        const euclideanDistance = await faceapi.euclideanDistance(
          parsedCreatedFaceDesc,
          parsedBwFaceDesc
        )
        return {...user, euclideanDistance}
      })
    )
    // console.timeEnd('map')
    // console.time('sort')
    const matches = users
      .sort((a, b) => a.euclideanDistance - b.euclideanDistance)
      .slice(0, 5)
    // console.timeEnd('sort')
    // console.timeEnd('total')
    console.log(matches)
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
