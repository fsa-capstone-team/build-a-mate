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

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
  }
]

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
    const {activeStep} = this.state
    const maxSteps = tutorialSteps.length

    const {classes, firstName, age, summary, photos} = this.props

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
