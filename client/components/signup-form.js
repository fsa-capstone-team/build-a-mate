import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import {editInfo} from '../store'
//import history from '../history'

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
}

const days = [...Array(31).keys()]

const years = [...Array(82).keys()]

const genders = {
  Male: 'male',
  Female: 'female'
}

const styles = () => ({
  name: {
    width: '50%'
  },
  birthday: {
    width: '30%'
  },
  gender: {
    width: '36%'
  },
  aboutMe: {
    width: '88%'
  },
  photos: {
    height: 470,
    width: 700
  },
  menu: {
    width: 200
  }
})

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      month: '',
      day: '',
      year: '',
      gender: '',
      genderPreference: '',
      summary: '',
      photos: ['']
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const birthday = new Date(
      this.state.year,
      this.state.month - 1,
      this.state.day
    )
    const age = Math.abs(
      new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970
    )
    if (age < 18) {
      alert('You must be at least 18 years old to sign up.')
      
    } else {
      await this.props.editInfo(this.state)
      this.props.step()
      //history.push('/signup')
    }
  }

  async componentDidMount() {
    //console.log('PROPS:', this.props)
    const {
      firstName,
      lastName,
      month,
      day,
      year,
      gender,
      genderPreference,
      summary,
      photos
    } = this.props.user
    this.setState({
      firstName,
      lastName,
      month,
      day,
      year,
      gender,
      genderPreference,
      summary,
      photos
    })
  }

  render() {
    //console.log('LOCAL STATE:', this.state)
    const {classes} = this.props
    const {
      firstName,
      lastName,
      month,
      day,
      year,
      gender,
      genderPreference,
      summary,
      photos
    } = this.state
    const {handleChange, handleSubmit} = this

    return (
      <form onSubmit={handleSubmit}>
        <Button
          justifyContent="flex-end"
          variant="contained"
          color="primary"
          type="submit"
          name="submit"
        >
          Next
        </Button>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6" component="h3">
            Name:
          </Typography>
          <TextField
            placeholder="First"
            onChange={handleChange}
            name="firstName"
            value={firstName}
            className={classes.name}
            variant="outlined"
          />
          <TextField
            placeholder="Last"
            onChange={handleChange}
            name="lastName"
            value={lastName}
            className={classes.name}
            variant="outlined"
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6" component="h3">
            Birthday:
          </Typography>
          <Select
            className={classes.birthday}
            onChange={handleChange}
            name="month"
            value={month}
            displayEmpty
            input={<OutlinedInput />}
          >
            <MenuItem value={null} disabled>
              -- Select Month --
            </MenuItem>
            {Object.keys(months).map(key => (
              <MenuItem key={months[key]} value={months[key]}>
                {key}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={classes.birthday}
            onChange={handleChange}
            name="day"
            value={day}
            displayEmpty
            input={<OutlinedInput />}
          >
            <MenuItem value={null} disabled>
              -- Select Day --
            </MenuItem>
            {days.map(option => (
              <MenuItem key={option + 1} value={option + 1}>
                {option + 1}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={classes.birthday}
            onChange={handleChange}
            name="year"
            value={year}
            displayEmpty
            input={<OutlinedInput />}
          >
            <MenuItem value={null} disabled>
              -- Select Year --
            </MenuItem>
            {years.map(option => (
              <MenuItem key={2001 - option} value={2001 - option}>
                {2001 - option}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6" component="h3">
            I'm a
          </Typography>
          <Select
            className={classes.gender}
            onChange={handleChange}
            name="gender"
            value={gender}
            displayEmpty
            input={<OutlinedInput />}
          >
            <MenuItem value={null} disabled>
              -- Select Gender --
            </MenuItem>
            {Object.keys(genders).map(key => (
              <MenuItem key={genders[key]} value={genders[key]}>
                {key}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="h6" component="h3">
            looking for a
          </Typography>
          <Select
            className={classes.gender}
            onChange={handleChange}
            name="genderPreference"
            value={genderPreference}
            displayEmpty
            input={<OutlinedInput />}
          >
            <MenuItem value={null} disabled>
              -- Select Gender --
            </MenuItem>
            {Object.keys(genders).map(key => (
              <MenuItem key={genders[key]} value={genders[key]}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h6" component="h3">
            About me:
          </Typography>
          <TextField
            multiline
            rows="8"
            placeholder="Write something about yourself..."
            onChange={handleChange}
            name="summary"
            value={summary}
            className={classes.aboutMe}
            variant="outlined"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h3">
            Photos:
          </Typography>
          <GridList
            className={classes.photos}
            cellHeight={200}
            cols={3}
            spacing={1}
          >
            {photos.map((photo, idx) => (
              <GridListTile key={idx} cols={1} rows={1}>
                <img
                  src={photo}
                  onClick={() => {
                    alert('Upload image functionality to be added!')
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </Box>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  editInfo: userObject => dispatch(editInfo(userObject))
})

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
)
