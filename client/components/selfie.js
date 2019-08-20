import React from 'react'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {makeStyles} from '@material-ui/core/styles'
import Img from 'react-image'

require('../../secrets')

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}))

export default function Selfie(props) {
  const classes = useStyles()

  return (
    <div>
      <Img src={props.img} />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        type="submit"
        onClick={props.onSubmit}
      >
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </div>
  )
}
