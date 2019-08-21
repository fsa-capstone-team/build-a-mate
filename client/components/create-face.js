import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import FaceFeatures from './face-features'
import FaceCanvas from './face-canvas'
import CustomDragLayer from './custom-drag-layer'
import Grid from '@material-ui/core/Grid'

const styles = () => ({
  features: {
    margin: '2%'
  },
  canvas: {
    marginTop: '2%',
    marginRight: '2%',
    marginBottom: '2%'
  }
})

class CreateFace extends Component {
  render() {
    const {classes, template, currentFeatures} = this.props

    return (
      <Grid container>
        <Grid item xs={5} className={classes.features}>
          <FaceFeatures />
        </Grid>
        <Grid item xs={6} className={classes.canvas}>
          <div>
            <FaceCanvas template={template} currentFeatures={currentFeatures} />
            <CustomDragLayer />
          </div>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    template: state.currentTemplate,
    currentFeatures: state.currentFeatures
  }
}

export default withStyles(styles)(connect(mapStateToProps)(CreateFace))
