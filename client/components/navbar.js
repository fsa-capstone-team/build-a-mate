import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import {AuthModal} from '../components'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    height: 70,
    background: '#E75480'
    // background : '#FDC9D3'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = ({handleClick, accountCreated, signupCompleted}) => {
  const classes = useStyles()

  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <img
              src="https://image.flaticon.com/icons/svg/1256/1256664.svg"
              height="30"
              width="30"
            />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Typography
                color="inherit"
                variant="h6"
                className={classes.title}
                to="/"
                component={NavLink}
              >
                Build-A-Mate
              </Typography>
            </IconButton>
            {accountCreated ? (
              <div>
                {/* The header will show these links after you log in */}
                <Button color="inherit" to="/matches" component={NavLink}>
                  Matches
                </Button>
                <Button color="inherit" onClick={handleClick}>
                  Logout
                </Button>
              </div>
            ) : (
              <Box display="flex" flexDirection="row">
                {/* The header will show these links before you log in */}
                <AuthModal />
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // isLoggedIn: !!state.user.id
    accountCreated: !!state.user.id,
    signupCompleted: !!state.user.createdFaceDesc
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
  accountCreated: PropTypes.bool.isRequired,
  signupCompleted: PropTypes.bool.isRequired
}
