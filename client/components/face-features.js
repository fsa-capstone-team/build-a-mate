import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getFeatures,
  changeCurrentTemplate,
  addToCurrentFeatures
} from '../store'
import {withStyles} from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = () => ({
  outerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 800
  },
  paper: {},
  innerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class CreateFace extends Component {
  constructor() {
    super()
    this.state = {
      heads: [],
      eyebrows: [],
      eyes: [],
      noses: [],
      mouths: []
    }
  }

  async componentDidMount() {
    await this.props.getFeatures(this.props.genderPreference)
    this.setState({
      heads: this.props.faceFeatures.heads,
      eyebrows: this.props.faceFeatures.eyebrows,
      eyes: this.props.faceFeatures.eyes,
      noses: this.props.faceFeatures.noses,
      mouths: this.props.faceFeatures.mouths
    })
  }

  render() {
    const {classes, changeTemplate, addFeature} = this.props
    const {heads, eyebrows, eyes, noses, mouths} = this.state

    return (
      <Box className={classes.outerBox}>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {heads.map(head => {
              return (
                <Button onClick={changeTemplate} name="head" value={head}>
                  <img src={head} width="100" />
                </Button>
              )
            })}
          </Box>
        </Paper>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {eyebrows.map(eyebrow => {
              return (
                <Button
                  onClick={addFeature}
                  key={eyebrow}
                  name="eyebrow"
                  value={eyebrow}
                >
                  <img src={eyebrow} width="100" />
                </Button>
              )
            })}
          </Box>
        </Paper>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {eyes.map(eye => {
              return (
                <Button onClick={addFeature} key={eye} name="eye" value={eye}>
                  <img src={eye} width="100" />
                </Button>
              )
            })}
          </Box>
        </Paper>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {noses.map(nose => {
              return (
                <Button
                  onClick={addFeature}
                  key={nose}
                  name="nose"
                  value={nose}
                >
                  <img src={nose} width="100" />
                </Button>
              )
            })}
          </Box>
        </Paper>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {mouths.map(mouth => {
              return (
                <Button
                  onClick={addFeature}
                  key={mouth}
                  name="mouth"
                  value={mouth}
                >
                  <img src={mouth} width="100" />
                </Button>
              )
            })}
          </Box>
        </Paper>
      </Box>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    genderPreference: state.user.genderPreference,
    faceFeatures: state.faceFeatures
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getFeatures(genderPreference) {
      dispatch(getFeatures(genderPreference))
    },
    changeTemplate(event) {
      dispatch(changeCurrentTemplate(event.currentTarget.value))
    },
    addFeature(event) {
      dispatch(
        addToCurrentFeatures(
          event.currentTarget.name,
          event.currentTarget.value
        )
      )
    }
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CreateFace)
)
