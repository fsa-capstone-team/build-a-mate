import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {SignupForm, UploadBWFace} from '../components'
import Box from '@material-ui/core/Box'
import MakeFace from '../ReactDnD'

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
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.getStepContent = this.getStepContent.bind(this)
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

  handleReset() {
    this.setState({
      activeStep: 0
    })
  }

  getStepContent(stepIndex) {
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

  render() {
    const {activeStep} = this.state
    const {classes} = this.props

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
            <SignupForm />
            <img src="image/snail_couple.png" width="20%" />
          </Box>
        ) : activeStep === 1 ? (
          <UploadBWFace />
        ) : activeStep === 2 ? (
          <MakeFace />
        ) : null}
        <Box
          display="flex"
          justifyContent="flex-end"
          className={classes.buttons}
        >
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {this.getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(SignupPage)
