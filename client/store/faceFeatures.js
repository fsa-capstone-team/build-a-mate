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
    '/image/face.jpg',
    '/image/face.jpg',
    '/image/face.jpg',
    '/image/face.jpg',
    '/image/face.jpg',
    '/image/face.jpg'
  ],
  eyebrows: [
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg',
    '/image/eyebrows.jpeg'
  ],
  eyes: [
    '/image/eyes.jpeg',
    '/image/eyes.jpeg',
    '/image/eyes.jpeg',
    '/image/eyes.jpeg',
    '/image/eyes.jpeg',
    '/image/eyes.jpeg',
    '/image/eyes.jpeg'
  ],
  noses: [
    '/image/nose.png',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
    'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg'
  ],
  mouths: [
    '/image/lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
    'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg'
  ]
}

const femaleFeatures = {
  heads: [
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png',
    '/image/female-head-1.png'
  ],
  eyebrows: [
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png',
    '/image/female-eyebrows-1.png'
  ],
  eyes: [
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png',
    '/image/female-eyes-1.png'
  ],
  noses: [
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png',
    '/image/female-nose-1.png'
  ],
  mouths: [
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
    '/image/female-mouth-1.png',
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
