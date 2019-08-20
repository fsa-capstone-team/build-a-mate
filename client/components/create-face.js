import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles'
import FaceFeatures from './face-features'
import FaceTemplate from './face-template'
import Grid from '@material-ui/core/Grid'

const styles = () => ({
  features: {
    margin: '2%'
  },
  template: {
    marginTop: '2%',
    marginRight: '2%',
    marginBottom: '2%'
  }
})

class CreateFace extends Component {
  render() {
    const {classes} = this.props

    return (
      <Grid container>
        <Grid item xs={5} className={classes.features}>
          <FaceFeatures />
        </Grid>
        <Grid item xs={6} className={classes.template}>
          <FaceTemplate />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateFace)
