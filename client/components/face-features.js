import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeCurrentTemplate} from '../store'
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
        'https://i.pinimg.com/originals/a9/0b/97/a90b97c98fd6d7c0e4e04d208e0090bd.jpg',
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
    const {classes, handleClick} = this.props
    const {heads, eyebrows, eyes, noses, mouths} = this.state

    return (
      <Box className={classes.outerBox}>
        <Paper className={classes.feature}>
          <Box className={classes.innerBox}>
            {heads.map(head => {
              return (
                <Button onClick={handleClick} name="head" value={head}>
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
                <Button>
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
                <Button>
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
                <Button>
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
                <Button>
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
    handleClick(event) {
      dispatch(changeCurrentTemplate(event.currentTarget.value))
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(CreateFace))
