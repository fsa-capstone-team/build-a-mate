// ACTION TYPES
const GET_FEATURES = 'GET_FEATURES'

// ACTION CREATORS
function gotFeatures(features) {
  return {type: GET_FEATURES, features}
}

const initialState = {
  heads: [],
  eyebrows: [],
  eyes: [],
  noses: [],
  mouths: []
}

const maleFeatures = {
  heads: [
    '/image/male-head-1.png',
    '/image/male-head-2.png',
    '/image/female-head-3.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png'
  ],
  eyebrows: [
    '/image/male-eyebrows-1.png',
    '/image/male-eyebrows-2.png',
    '/image/female-eyebrows-3.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png'
  ],
  eyes: [
    '/image/male-eyes-1.png',
    '/image/male-eyes-2.png',
    '/image/female-eyes-3.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png'
  ],
  noses: [
    '/image/male-nose-1.png',
    '/image/male-nose-2.png',
    '/image/female-nose-3.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png'
  ],
  mouths: [
    '/image/male-mouth-1.png',
    '/image/male-mouth-2.png',
    '/image/female-mouth-3.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png'
  ]
}

const femaleFeatures = {
  heads: [
    '/image/female-head-1.png',
    '/image/female-head-2.png',
    '/image/female-head-3.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png'
  ],
  eyebrows: [
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-2.png',
    '/image/female-eyebrows-3.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png'
  ],
  eyes: [
    '/image/female-eyes-1.png',
    '/image/female-eyes-2.png',
    '/image/female-eyes-3.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png'
  ],
  noses: [
    '/image/female-nose-1.png',
    '/image/female-nose-2.png',
    '/image/female-nose-3.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png'
  ],
  mouths: [
    '/image/female-mouth-1.png',
    '/image/female-mouth-2.png',
    '/image/female-mouth-3.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png'
  ]
}

export const getFeatures = genderPreference => dispatch => {
  try {
    if (genderPreference === 'male') {
      dispatch(gotFeatures(maleFeatures))
    } else {
      dispatch(gotFeatures(femaleFeatures))
    }
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEATURES:
      return action.features
    default:
      return state
  }
}
