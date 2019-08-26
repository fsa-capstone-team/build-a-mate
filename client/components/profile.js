import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = () => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 400,
    justifyContent: 'flex-start'
  },
  content: {
    margin: '3%'
  }
})

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      activeStep: 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleStepChange = this.handleStepChange.bind(this)
  }

  handleNext() {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }))
  }

  handleBack() {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }))
  }

  handleStepChange(step) {
    this.setState({activeStep: step})
  }

  render() {
    const {classes, firstName, age, summary, photos} = this.props
    const {activeStep} = this.state
    const maxSteps = photos.length

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {photos.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
        <Paper square elevation={0} className={classes.summary}>
          <Grid container alignItems="center">
            <Grid item xs className={classes.content}>
              <Typography variant="h4">{`${firstName}, ${age}`}</Typography>
            </Grid>
            {/* <Grid item className={classes.content}>
              <Typography variant="h4">90% Match</Typography>
            </Grid> */}
          </Grid>
          <Divider variant="middle" />
          <div className={classes.content}>
            <Typography variant="h5">About</Typography>
            <Typography variant="h6">{summary}</Typography>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Profile))
