import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {SignupForm} from '../components'
import Box from '@material-ui/core/Box'
import MakeFace from '../ReactDnD'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  buttons: {
    marginBottom: 50
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: 100
  },
  stepper: {
    width: '70%',
    marginTop: 10,
    backgroundColor: '#E4E9FE'
  }
}))

function getSteps() {
  return ['Tell us about yourself', 'Take a picture', 'Build your soulmate']
}

function getStepContent(stepIndex) {
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

const SignupPage = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
  }

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
        <div>Hello World!!</div>
      ) : activeStep === 2 ? (
        <MakeFace />
      ) : null}
      <Box display="flex" justifyContent="flex-end" className={classes.buttons}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Box>
    </Box>
  )
}

export default SignupPage
