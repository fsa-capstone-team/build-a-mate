import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  buttons: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '5%',
    color: '#FFFFFF',
    backgroundColor: '#E75480'
  },
  poppers: {
    margin: '5%',
    padding: '5%'
  }
})

class FaceFeatures extends Component {
  constructor() {
    super()
    this.state = {
      heads: ['head1', 'head2', 'head3'],
      eyebrows: ['eyebrow1', 'eyebrow2', 'eyebrow3'],
      eyes: ['eye1', 'eye2', 'eye3'],
      noses: ['nose1', 'nose2', 'nose3'],
      mouths: ['mouth1', 'mouth2', 'mouth3'],
      anchorEl: null,
      open: false,
      feature: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
      open: !this.state.open,
      feature: event.currentTarget.name
    })
  }

  render() {
    const {anchorEl, open, feature} = this.state
    const {classes} = this.props

    console.log(this.state)
    return (
      <div>
        <Popper open={open} anchorEl={anchorEl} placement="right" transition>
          {({TransitionProps}) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.poppers}>
                <Typography>
                  {this.state[feature].map(each => {
                    return (
                      <Button>
                        <img
                          src="https://visioneyeinstitute.com.au/wp-content/uploads/laser-eye-safety.jpg"
                          width="100"
                        />
                      </Button>
                    )
                  })}
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Grid container>
          <Grid item xs={12}>
            <Button
              onClick={this.handleClick}
              name="heads"
              className={classes.buttons}
            >
              Heads
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleClick}
              name="eyebrows"
              className={classes.buttons}
            >
              Eyebrows
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleClick}
              name="eyes"
              className={classes.buttons}
            >
              Eyes
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleClick}
              name="noses"
              className={classes.buttons}
            >
              Noses
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleClick}
              name="mouths"
              className={classes.buttons}
            >
              Mouths
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(FaceFeatures)
