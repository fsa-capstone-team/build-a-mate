import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeCurrentTemplate, addToCurrentFeatures} from '../store'
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
      heads: [
        '/image/face.jpg',
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg',
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg',
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg',
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg',
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg'
      ],
      eyebrows: [
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png',
        'http://www.mahilalu.com/wp-content/uploads/2016/01/Eye-Brows-tips.png'
      ],
      eyes: [
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg',
        'https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg'
      ],
      noses: [
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg',
        'http://cdn.24.co.za/files/Cms/General/d/3842/a027f9013a9c4a2a84a20a0edb02d6af.jpg'
      ],
      mouths: [
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg',
        'https://groomandstyle.com/wp-content/uploads/2018/07/Beautiful-Lips.jpg'
      ]
    }
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

const mapDispatchToProps = function(dispatch) {
  return {
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

export default withStyles(styles)(connect(null, mapDispatchToProps)(CreateFace))
