import React, {Component} from 'react'
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
