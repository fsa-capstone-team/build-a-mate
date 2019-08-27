import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Box from '@material-ui/core/Box'
import {SignupForm, UploadBWFace, CreateFace, Matches} from '../components'

const styles = () => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: '5%'
  },
  buttons: {
    marginBottom: 50
  },
  instructions: {
    marginTop: '5%',
    marginBottom: '5%',
    marginRight: '5%'
  },
  stepper: {
    width: '70%',
    marginTop: 10,
    backgroundColor: '#E4E9FE'
  }
})

const steps = [
  'Tell us about yourself',
  'Take a picture',
  'Build your soulmate'
]

class SignupPage extends Component {
  constructor() {
    super()
    this.state = {
      activeStep: 0
    }
  }

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return 'Please fill in all required fields.'
      case 1:
        return 'This will be used for matching.'
      case 2:
        return 'Proceed to your matches!'
      default:
        return 'Uknown stepIndex'
    }
  }

  step = () => {
    console.log('STEP:', this.state.activeStep)
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }))
    console.log('NEXT STEP:', this.state.activeStep)
  }

  stepBack = () => {
    console.log('STEP:', this.state.activeStep)
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }))
    console.log('NEXT STEP:', this.state.activeStep)
  }

  render() {
    const {activeStep} = this.state
    const {classes} = this.props

    console.log('STATE:', this.state)

    return (
      <Box display="flex" flexDirection="column" className={classes.root}>
        <Box display="flex" justifyContent="center" width="100%">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepper}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {activeStep === 0 ? (
          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src="image/snail_couple.png" width="20%" />
            <SignupForm step={this.step} />
            <img src="image/snail_couple.png" width="20%" />
          </Box>
        ) : activeStep === 1 ? (
          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src="image/snail_couple.png" width="20%" />
            <UploadBWFace step={this.step} stepBack={this.stepBack} />
            <img src="image/snail_couple.png" width="20%" />
          </Box>
        ) : (
          <CreateFace />
        )}
      </Box>
    )
  }
}

export default withStyles(styles)(SignupPage)
