import axios from 'axios'
import * as faceapi from 'face-api.js'

// ACTION TYPES
const GOT_MATCHES = 'GOT_MATCHES'

// ACTION CREATORS
const gotMatches = matches => ({type: GOT_MATCHES, matches})

// THUNK CREATORS
export const getMatches = () => async (dispatch, getState) => {
  try {
    const state = getState()
    //onst id = state.user.id
    const {data} = await axios.get(`/api/users/matches/${state.user.id}`)
    const parsedCreatedFaceDesc = await new Float32Array(
      Object.values(JSON.parse(state.user.createdFaceDesc))
    )
    let matches = await Promise.all(
      data.map(async match => {
        const parsedBwFaceDesc = await new Float32Array(
          Object.values(JSON.parse(match.bwFaceDesc))
        )
        const euclideanDistance = await faceapi.euclideanDistance(
          parsedCreatedFaceDesc,
          parsedBwFaceDesc
        )
        return {...match, euclideanDistance}
      })
    )
    // console.timeEnd('map')
    // console.time('sort')
    matches = matches
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
    case GOT_MATCHES:
      return action.matches
    default:
      return state
  }
}
