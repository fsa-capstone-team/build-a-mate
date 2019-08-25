import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {SignupForm, UploadBWFace, CreateFace, Matches} from '../components'
import {editInfo, addFaceDesc} from '../store'

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
      activeStep: 0,
      firstName: null,
      lastName: null,
      month: null,
      day: null,
      year: null,
      gender: null,
      genderPreference: null,
      summary: null,
      photos: [
        'image/add-photo.png',
        'image/add-photo.png',
        'image/add-photo.png',
        'image/add-photo.png',
        'image/add-photo.png',
        'image/add-photo.png'
      ],
      bwFaceImg: null,
      createdFaceImg: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.setParentState = this.setParentState.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.getStepContent = this.getStepContent.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setParentState(type, img) {
    this.setState({
      [type]: img
    })
  }

  handleNext() {
    const birthday = new Date(
      this.state.year,
      this.state.month - 1,
      this.state.day
    )
    const age = Math.abs(
      new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970
    )
    if (this.state.activeStep === 0 && age < 18) {
      alert('You must be at least 18 years old to sign up.')
      return
    } else if (this.state.activeStep === 0 && age >= 18) {
      this.props.updateInfo({
        id: this.props.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age,
        gender: this.state.gender,
        genderPreference: this.state.genderPreference,
        summary: this.state.summary,
        photos: this.state.photos
      })
    } else if (this.state.activeStep === 1) {
      this.props.addFaceDesc(this.props.id, this.state.bwFaceImg, 'bwFaceDesc')
    } else if (this.state.activeStep === 2) {
      this.props.addFaceDesc(
        this.props.id,
        this.state.createdFaceImg,
        'createdFaceDesc'
      )
    }

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
      activeStep: 2
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

    console.log(this.state)

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
            <SignupForm handleChange={this.handleChange} {...this.state} />
            <img src="image/snail_couple.png" width="20%" />
          </Box>
        ) : activeStep === 1 ? (
          <UploadBWFace
            id={this.props.id}
            setParentState={this.setParentState}
            {...this.state}
          />
        ) : activeStep === 2 ? (
          <CreateFace
            id={this.props.id}
            setParentState={this.setParentState}
            {...this.state}
          />
        ) : (
          <Matches />
        )}
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
              <Button onClick={this.handleReset}>Build a new face</Button>
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

const mapStateToProps = function(state) {
  return {
    id: state.user.id
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateInfo(userObject) {
      dispatch(editInfo(userObject))
    },
    addFaceDesc(userId, img, type) {
      dispatch(addFaceDesc(userId, img, type))
    }
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SignupPage)
)
