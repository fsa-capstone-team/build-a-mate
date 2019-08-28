// ACTION TYPES
const CHANGE_TEMPLATE = 'CHANGE_TEMPLATE'
const RESET_TEMPLATE = 'RESET_TEMPLATE'

// ACTION CREATORS
export function changeCurrentTemplate(template) {
  return {type: CHANGE_TEMPLATE, template}
}

export function resetTemplate() {
  return {type: RESET_TEMPLATE}
}

const initialState = ''

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEMPLATE:
      return action.template
    case RESET_TEMPLATE:
      return initialState
    default:
      return state
  }
}
