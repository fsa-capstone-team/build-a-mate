import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMatches} from '../store'
import {Profile} from '../components'
import Box from '@material-ui/core/Box'

class Matches extends Component {
  // constructor() {
  //   super()
  //   this.state = {}
  // }

  componentDidMount() {
    console.log('IN MATCHES')
    this.props.getMatches()
  }

  render() {
    const {matches} = this.props
    console.log('REACHED MATCHES!')

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

const mapStateToProps = state => ({
  matches: state.matches
})

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(getMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Matches)
