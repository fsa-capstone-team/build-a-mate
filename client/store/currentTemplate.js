// ACTION TYPES
const CHANGE_TEMPLATE = 'CHANGE_TEMPLATE'

// ACTION CREATORS
export function changeCurrentTemplate(template) {
  const action = {type: CHANGE_TEMPLATE, template}
  return action
}

// REDUCER
export default function reducer(state = '', action) {
  switch (action.type) {
    case CHANGE_TEMPLATE:
      return action.template

    default:
      return state
  }
}
