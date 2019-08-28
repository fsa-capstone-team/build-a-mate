// ACTION TYPES
const ADD_FEATURE = 'ADD_FEATURE'
const RESET_FEATURES = 'RESET_FEATURES'

// ACTION CREATORS
export function addToCurrentFeatures(feature, image) {
  return {type: ADD_FEATURE, feature, image}
}

export function resetFeatures() {
  return {type: RESET_FEATURES}
}

const initialState = {
  eyebrow: '',
  eye: '',
  nose: '',
  mouth: ''
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        [action.feature]: action.image
      }
    case RESET_FEATURES:
      return initialState
    default:
      return state
  }
}
