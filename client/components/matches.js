import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMatches} from '../store'
import {Profile} from '../components'
import Box from '@material-ui/core/Box'

class Matches extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getMatches(
      this.props.id,
      this.props.gender,
      this.props.genderPreference,
      this.props.createdFaceDesc
    )
  }

  render() {
    const {matches} = this.props

    return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <h1>Here are your top matches!</h1>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {matches.map(match => {
            return <Profile key={match.id} {...match} />
          })}
        </Box>
        <Box display="flex" justifyContent="center">
          <NavLink to="/create-face">
            <h2>Build another face for new matches!</h2>
          </NavLink>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    id: state.user.id,
    gender: state.user.gender,
    genderPreference: state.user.genderPreference,
    createdFaceDesc: state.user.createdFaceDesc,
    matches: state.matches
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getMatches(id, gender, genderPreference, createdFaceDesc) {
      dispatch(getMatches(id, gender, genderPreference, createdFaceDesc))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches)
