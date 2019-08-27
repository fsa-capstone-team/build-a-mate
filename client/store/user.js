import axios from 'axios'
import history from '../history'
import * as faceapi from 'face-api.js'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  if (method === 'signup') {
    try {
      dispatch(getUser(res.data))
      history.push('/signup')
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr)
    }
  } else {
    try {
      dispatch(getUser(res.data))
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

export const editInfo = userObject => async dispatch => {
  try {
    const res = await axios.put('/auth/editinfo', userObject)
    console.log('res:', res)
    dispatch(getUser(res.data))
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

export const addFaceDesc = (userId, img, type) => async dispatch => {
  try {
    await faceapi.loadFaceRecognitionModel('/models')
    if (type === 'createdFaceDesc') {
      const image = await faceapi.fetchImage(img)
      const faceDesc = await faceapi.computeFaceDescriptor(image)
      const res = await axios.post(`api/imgur/${type}/${userId}`, {faceDesc})
      await dispatch(getUser(res.data))
      history.push('/matches')
    } else {
      const faceDesc = await faceapi.computeFaceDescriptor(img)
      console.log(faceDesc)
      console.log('TYPE:', typeof faceDesc)
      const res = await axios.post(`api/imgur/${type}/${userId}`, {faceDesc})
      console.log('USER:', res.data)
      await dispatch(getUser(res.data))
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
