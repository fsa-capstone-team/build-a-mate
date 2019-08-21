// ACTION TYPES
const ADD_FEATURE = 'ADD_FEATURE'

// ACTION CREATORS
export function addToCurrentFeatures(feature, image) {
  return {type: ADD_FEATURE, feature, image}
}

const initialState = {
  eyebrow: {},
  eye: {},
  nose: {},
  mouth: {}
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        [action.feature]: {top: 0, left: 0, image: action.image}
      }
    default:
      return state
  }
}
