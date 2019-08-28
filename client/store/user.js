import axios from 'axios'
import history from '../history'
import * as faceapi from 'face-api.js'

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const gotUser = user => ({type: GOT_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(gotUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }

  if (method === 'signup') {
    try {
      dispatch(gotUser(res.data))
      history.push('/signup')
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr)
    }
  } else {
    try {
      dispatch(gotUser(res.data))
      if (res.data.createdFaceDesc) {
        history.push('/matches')
      } else {
        history.push('/signup')
      }
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr)
    }
  }
}

export const editInfo = userObject => async (dispatch, getState) => {
  try {
    const state = getState()
    console.log('STORE STATE:', state)
    const {data} = await axios.put(
      `/auth/editinfo/${state.user.id}`,
      userObject
    )
    console.log('res:', data)
    dispatch(gotUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

export const addFaceDesc = (base64, type) => async (dispatch, getState) => {
  try {
    console.log('I AM HERE!')
    const state = getState()
    await faceapi.loadFaceRecognitionModel('/models')
    const faceDesc = await faceapi.computeFaceDescriptor(base64)
    console.log(faceDesc)
    console.log('TYPE:', type)
    console.log('BASE64', base64.src)

    const {data} = await axios.post(`/api/imgur/${type}/${state.user.id}`, {
      faceDesc
    })

    ////DEMO PURPOSE ONLY////
    if (type === 'bwFaceDesc') {
      await axios.post(`/api/imgur/demoUpload/${state.user.id}`, {
        src: base64.src
      })
    }
    ////DEMO PURPOSE ONLY////

    console.log('USER:', data)
    dispatch(gotUser(data))
    return 'success'
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GOT_USER:
      return {...state, ...action.user}
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
