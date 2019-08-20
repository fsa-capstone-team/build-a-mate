import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const styles = () => ({
  paper: {
    height: 800
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 800
  }
})

class FaceTemplate extends Component {
  render() {
    const {classes, template} = this.props

    return (
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          <img src={template} width={700} />
        </Box>
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    template: state.currentTemplate
  }
}

export default withStyles(styles)(connect(mapStateToProps)(FaceTemplate))
